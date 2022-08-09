import { Component, h, Listen, Prop } from '@stencil/core';
import { Position, Rect, DashboardConfiguration, OnResize, Anchor } from '../../types';
import {
  MoveActionInput,
  DeleteActionInput,
  ResizeActionInput,
  SelectActionInput,
} from '../../dashboard-actions/actions';
import { getSelectedWidgetIds } from '../../util/select';
import { getSelectionBox } from './getSelectionBox';
import { DASHBOARD_CONTAINER_ID, getDashboardPosition } from './getDashboardPosition';

@Component({
  tag: 'iot-dashboard-internal',
  styleUrl: 'iot-dashboard-internal.css',
  shadow: false,
})
export class IotDashboardInternal {
  /** The configurations which determines which widgets render where with what settings. */
  @Prop() dashboardConfiguration: DashboardConfiguration;

  /**
   * Whether the dashboard grid will stretch to fit.
   *
   * If stretch to fit is false, the dashboard grid will be the width in pixels.
   * If not enough room is present, it will utilize scrollbars to allow access to the entire grid.
   *
   * If stretch to fit is true, the entire grid will scale proportionally to scale to the available space for the grid.
   */
  @Prop() stretchToFit: boolean;

  /** Width of the dashboard, in pixels */
  @Prop() width: number;

  /** Width and height of the cell, in pixels */
  @Prop() cellSize: number;

  @Prop() move: (moveInput: MoveActionInput) => void;

  @Prop() resizeWidgets: (resizeInput: ResizeActionInput) => void;

  @Prop() deleteWidgets: (deleteInput: DeleteActionInput) => void;

  @Prop() pasteWidgets: () => void;
  @Prop() copyWidgets: () => void;

  @Prop() selectWidgets: (selectInput: SelectActionInput) => void;

  @Prop() undo: () => void;
  @Prop() redo: () => void;

  private startMove: Position;
  private endMove: Position;

  private startResize: Position;
  private endResize: Position;

  private moveStartWidgetIds: string[];

  /** List of ID's of the currently selected widgets. */
  @Prop() selectedWidgetIds: string[] = [];

  /** The currently active gesture */
  private activeGesture: 'move' | 'resize' | 'selection' | undefined;

  /**
   * Selection gesture
   */

  private start: Position | undefined;
  private end: Position | undefined;

  /**
   * Resize gesture
   */
  /** If the active gesture is resize, this represents which anchor point the resize is being done relative to */
  private activeResizeAnchor: Anchor | undefined;
  /** The initial position of the cursor on the start of the resize gesture */
  private resizeStartPosition: Position | undefined;

  isPositionOnWidget = ({ x, y }: Position): boolean => {
    const intersectedWidgetIds = getSelectedWidgetIds({
      selectedRect: { x, y, width: 1, height: 1 },
      dashboardConfiguration: this.dashboardConfiguration,
      cellSize: this.cellSize,
    });
    return intersectedWidgetIds.length !== 0;
  };

  onDelete() {
    this.deleteWidgets({
      widgets: this.dashboardConfiguration.widgets.filter(({ id }) => this.selectedWidgetIds.includes(id)),
    });
  }

  onCopy() {
    this.copyWidgets();
  }

  onPaste() {
    this.pasteWidgets();
    const existingWidgetIds = this.getDashboardConfiguration().widgets.map(({ id }) => id);
    // Set the selection group to the newly pasted group of widgets
    const newlyCreatedWidgetIds = this.getDashboardConfiguration()
      .widgets.filter(({ id }) => !existingWidgetIds.includes(id))
      .map(({ id }) => id);
    this.selectWidgets({
      widgetIds: newlyCreatedWidgetIds,
    });
  }

  /**
   *
   * Gesture Start
   *
   */

  onGestureStart(event: MouseEvent) {
    const { x, y } = getDashboardPosition(event);
    const isMoveGesture = !event.shiftKey && this.isPositionOnWidget({ x, y });

    if (isMoveGesture) {
      this.onMoveStart({ x, y });
    } else {
      this.onSelectionStart(event);
    }
    // NOTE: Resize is initiated within the `<iot-selection-box />`
  }

  onSelectionStart(event: MouseEvent) {
    this.activeGesture = 'selection';

    const { x, y } = getDashboardPosition(event);
    this.start = { x, y };
    this.end = { x, y };

    const isUnionSelection = event.shiftKey;
    const intersectedWidgetIds = getSelectedWidgetIds({
      selectedRect: this.selectedRect(),
      dashboardConfiguration: this.getDashboardConfiguration(),
      cellSize: this.cellSize,
    });

    const newlySelectedWidgetIds = intersectedWidgetIds.filter((id) => !this.selectedWidgetIds.includes(id));
    this.selectWidgets({
      widgetIds: isUnionSelection ? [...this.selectedWidgetIds, ...newlySelectedWidgetIds] : intersectedWidgetIds,
    });
  }

  onResizeStart: OnResize = ({ anchor, currentPosition }) => {
    this.activeGesture = 'resize';

    this.activeResizeAnchor = anchor;
    this.resizeStartPosition = currentPosition;
    this.startResize = currentPosition;
  };

  onMoveStart({ x, y }: Position) {
    this.activeGesture = 'move';
    this.startMove = { x, y };
    const intersectedWidgetIds = getSelectedWidgetIds({
      selectedRect: { x, y, width: 1, height: 1 },
      dashboardConfiguration: this.getDashboardConfiguration(),
      cellSize: this.cellSize,
    });

    const selectingAlreadySelectedWidget = intersectedWidgetIds.some((widgetId) =>
      this.selectedWidgetIds.includes(widgetId)
    );

    if (!selectingAlreadySelectedWidget) {
      this.setSelectedWidgets();
    }

    if (this.selectedWidgetIds.length === 0) {
      this.moveStartWidgetIds = intersectedWidgetIds;
      this.selectWidgets({
        widgetIds: intersectedWidgetIds,
      });
    }
  }

  /**
   *
   * On gesture update
   *
   */

  onGestureUpdate(event: MouseEvent) {
    if (this.activeGesture === 'move') {
      this.onMove(getDashboardPosition(event));
    } else if (this.activeGesture === 'resize') {
      this.onResize(event);
    } else if (this.activeGesture === 'selection') {
      this.onSelection(event);
    }
  }

  onMove({ x, y }: Position) {
    this.move({
      position: { x, y },
      widgetIds: this.moveStartWidgetIds,
      isActionComplete: false,
    });
  }

  onSelection = (event: MouseEvent) => {
    const isUnionSelection = event.shiftKey;

    this.end = getDashboardPosition(event);
    const intersectedWidgetIds = getSelectedWidgetIds({
      selectedRect: this.selectedRect(),
      dashboardConfiguration: this.getDashboardConfiguration(),
      cellSize: this.cellSize,
    });

    const newlySelectedWidgetIds = intersectedWidgetIds.filter((id) => !this.selectedWidgetIds.includes(id));
    this.selectWidgets({
      widgetIds: isUnionSelection ? [...this.selectedWidgetIds, ...newlySelectedWidgetIds] : intersectedWidgetIds,
    });
  };

  onResize = (event: MouseEvent) => {
    if (this.activeResizeAnchor && this.resizeStartPosition) {
      this.resizeWidgets({
        anchor: this.activeResizeAnchor,
        changeInPosition: {
          x: event.clientX - this.resizeStartPosition.x,
          y: event.clientY - this.resizeStartPosition.y,
        },
        isActionComplete: false,
      });
      this.endResize = { x: event.clientX, y: event.clientY };
    }
  };

  /**
   * On end of gesture
   */

  onGestureEnd({ x, y }: Position) {
    if (this.activeGesture === 'move') {
      this.onMoveEnd({ x, y });
    } else if (this.activeGesture === 'resize') {
      this.onResizeEnd();
    } else if (this.activeGesture === 'selection') {
      this.onSelectionEnd();
    }
  }

  onMoveEnd({ x, y }: Position) {
    this.endMove = { x, y };
    this.move({
      position: this.endMove,
      prevPosition: this.startMove,
      widgetIds: this.selectedWidgetIds,
      isActionComplete: true,
    });

    this.activeGesture = undefined;
  }

  onResizeEnd() {
    if (this.activeResizeAnchor) {
      this.resizeWidgets({
        anchor: this.activeResizeAnchor,
        changeInPosition: {
          x: this.endResize.x - this.startResize.x,
          y: this.endResize.y - this.startResize.y,
        },

        isActionComplete: true,
      });
    }

    this.activeResizeAnchor = undefined;
    this.activeGesture = undefined;
  }

  onSelectionEnd() {
    // Clear selection
    this.start = undefined;
    this.end = undefined;
    this.activeGesture = undefined;
  }

  /**
   * Input bindings
   */

  @Listen('mousedown')
  onMouseDown(event: MouseEvent) {
    this.onGestureStart(event);
  }

  @Listen('mousemove')
  onMouseMove(event: MouseEvent) {
    this.onGestureUpdate(event);
  }

  @Listen('mouseup')
  onMouseUp(event: MouseEvent) {
    this.onGestureEnd(getDashboardPosition(event));
  }

  @Listen('keydown')
  onKeyDown({ key, ctrlKey, metaKey, shiftKey }: KeyboardEvent) {
    /** Delete action */
    const isDeleteAction = key === 'Backspace' || key === 'Delete';
    if (isDeleteAction) {
      this.onDelete();
      return;
    }

    /** Copy action */
    const isCopyAction = (ctrlKey || metaKey) && key === 'c';
    if (isCopyAction) {
      this.onCopy();
      return;
    }

    /** Paste action */
    const isPasteAction = (ctrlKey || metaKey) && key === 'v';
    if (isPasteAction) {
      this.onPaste();
      return;
    }

    /** Undo action */
    const isUndoAction = (ctrlKey || metaKey) && key === 'z' && !shiftKey;
    if (isUndoAction) {
      this.undo();
      return;
    }

    /** Redo action */
    const isRedoAction = (ctrlKey || metaKey) && shiftKey && key == 'z';
    if (isRedoAction) {
      this.redo();
      return;
    }
  }

  /**
   * Set which widgets are selected
   */
  setSelectedWidgets() {
    this.selectWidgets({
      widgetIds: getSelectedWidgetIds({
        selectedRect: this.selectedRect(),
        cellSize: this.cellSize,
        dashboardConfiguration: this.dashboardConfiguration,
      }),
    });
  }

  /**
   * Return the currently selected rectangle
   */
  selectedRect = (): Rect | undefined => {
    if (!this.start || !this.end) {
      return undefined;
    }
    return {
      x: Math.min(this.start.x, this.end.x),
      y: Math.min(this.start.y, this.end.y),
      width: Math.abs(this.start.x - this.end.x),
      height: Math.abs(this.start.y - this.end.y),
    };
  };

  getDashboardConfiguration = (): DashboardConfiguration => {
    return this.dashboardConfiguration;
  };

  render() {
    const dashboardConfiguration = this.getDashboardConfiguration();
    const cellSize = this.cellSize;

    const rect = this.selectedRect();
    const selectionBox = getSelectionBox({
      selectedWidgetIds: this.selectedWidgetIds,
      dashboardConfiguration,
    });
    return (
      <div
        id={DASHBOARD_CONTAINER_ID}
        tabIndex={0}
        class="container"
        style={{
          width: this.stretchToFit ? '100%' : `${this.width}px`,
        }}
      >
        {dashboardConfiguration.widgets.map((widget) => (
          <iot-dashboard-widget
            isSelected={this.selectedWidgetIds.includes(widget.id)}
            key={widget.id}
            cellSize={this.cellSize}
            widget={widget}
            viewport={this.dashboardConfiguration.viewport}
          />
        ))}

        {selectionBox != null && (
          <iot-selection-box
            onResize={this.onResizeStart}
            cellSize={this.cellSize}
            x={selectionBox.x}
            y={selectionBox.y}
            height={selectionBox.height}
            width={selectionBox.width}
          />
        )}
        {<div class="grid-image" style={{ backgroundSize: `${cellSize}px` }} />}

        {this.activeGesture === 'selection' && rect && (
          <div
            class="select-rect"
            style={{
              left: `${rect.x}px`,
              top: `${rect.y}px`,
              width: `${rect.width}px`,
              height: `${rect.height}px`,
            }}
          ></div>
        )}
      </div>
    );
  }
}
