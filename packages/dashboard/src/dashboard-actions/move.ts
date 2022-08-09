import { DashboardConfiguration, Position } from '../types';
import { mapWidgets } from '../util/dashboardConfiguration';

/**
 * Return dashboard configuration with the selected widgets moved based on a drag motion
 *
 * TODO: Refactor name to `move` for consistency
 */
export const move = ({
  position,
  previousPosition,
  selectedWidgetIds,
  dashboardConfiguration,
  cellSize,
}: {
  position: Position;
  previousPosition?: Position;
  selectedWidgetIds: string[];
  dashboardConfiguration: DashboardConfiguration;
  cellSize: number;
}) => {
  const { x, y } = position;

  const delta = {
    x: (previousPosition ? x - previousPosition.x : 0) / cellSize,
    y: (previousPosition ? y - previousPosition.y : 0) / cellSize,
  };

  return mapWidgets(dashboardConfiguration, (widget) => {
    if (selectedWidgetIds.includes(widget.id)) {
      return {
        ...widget,
        // widgets utilize css-grids to position, where x and y map to row and columns.
        // 1 represents the first row or column, so we ignore anything below that.
        x: Math.max(1, widget.x + delta.x),
        y: Math.max(1, widget.y + delta.y),
      };
    }
    return widget;
  });
};
