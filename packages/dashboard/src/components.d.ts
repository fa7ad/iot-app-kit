/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Anchor, DashboardConfiguration, MoveActionInput, OnResize, Widget } from "./types";
import { AlarmsConfig, Annotations, Axis, LabelsConfig, LayoutConfig, LegendConfig, MessageOverrides, MinimalSizeConfig, MinimalViewPortConfig, MovementConfig, ScaleConfig, Trend } from "@synchro-charts/core";
import { TimeQuery, TimeSeriesData, TimeSeriesDataRequest } from "@iot-app-kit/core";
export namespace Components {
    interface IotContextMenu {
        "x": number;
        "y": number;
    }
    interface IotDashboard {
        /**
          * Width and height of the cell, in pixels
         */
        "cellSize": number;
        /**
          * The configurations which determines which widgets render where with what settings.
         */
        "dashboardConfiguration": DashboardConfiguration;
        "move": (moveInput: MoveActionInput) => void;
        /**
          * Callback that is fired every time the dashboard configuration has been altered.  When a widget is moved, resized, deleted, appended, or altered, then this method is called
         */
        "onDashboardConfigurationChange"?: (config: DashboardConfiguration) => void;
        /**
          * Whether the dashboard grid will stretch to fit.  If stretch to fit is false, the dashboard grid will be the width in pixels. If not enough room is present, it will utilize scrollbars to allow access to the entire grid.  If stretch to fit is true, the entire grid will scale proportionally to scale to the available space for the grid.
         */
        "stretchToFit": Boolean;
        /**
          * Width of the dashboard, in pixels
         */
        "width": number;
    }
    interface IotDashboardDynamicWidget {
        "alarms"?: AlarmsConfig;
        "annotations"?: Annotations;
        "axis"?: Axis.Options;
        "componentTag": string;
        "gestures"?: boolean;
        /**
          * Error Messaging
         */
        "invalidTagErrorHeader": string;
        "invalidTagErrorSubheader": string;
        "isEditing"?: boolean;
        "labelsConfig"?: LabelsConfig;
        "layout"?: LayoutConfig;
        "legend"?: LegendConfig;
        "messageOverrides"?: MessageOverrides;
        "movement"?: MovementConfig;
        "queries": TimeQuery<TimeSeriesData[], TimeSeriesDataRequest>[];
        "readOnly"?: boolean;
        "scale"?: ScaleConfig;
        "size"?: MinimalSizeConfig;
        "trends"?: Trend[];
        "viewport": MinimalViewPortConfig;
        "widgetId": string;
    }
    interface IotDashboardWidget {
        "cellSize": number;
        "isMoving": boolean;
        "isSelected": boolean;
        "viewport": MinimalViewPortConfig;
        "widget": Widget;
        "width": number;
    }
    interface IotDashboardWrapper {
        /**
          * Width and height of the cell, in pixels
         */
        "cellSize": number;
        /**
          * The configurations which determines which widgets render where with what settings.
         */
        "dashboardConfiguration": DashboardConfiguration;
        /**
          * Callback that is fired every time the dashboard configuration has been altered.  When a widget is moved, resized, deleted, appended, or altered, then this method is called
         */
        "onDashboardConfigurationChange": (config: DashboardConfiguration) => void;
        /**
          * Whether the dashboard grid will stretch to fit.
         */
        "stretchToFit": Boolean;
        /**
          * Width of the dashboard, in pixels
         */
        "width": number;
    }
    interface IotSelectionBox {
        "cellSize": number;
        "height": number;
        "onResize": OnResize;
        "width": number;
        "x": number;
        "y": number;
    }
    interface IotSelectionBoxAnchor {
        "anchor": Anchor;
        "onResize": OnResize;
    }
    interface TestingGround {
    }
}
declare global {
    interface HTMLIotContextMenuElement extends Components.IotContextMenu, HTMLStencilElement {
    }
    var HTMLIotContextMenuElement: {
        prototype: HTMLIotContextMenuElement;
        new (): HTMLIotContextMenuElement;
    };
    interface HTMLIotDashboardElement extends Components.IotDashboard, HTMLStencilElement {
    }
    var HTMLIotDashboardElement: {
        prototype: HTMLIotDashboardElement;
        new (): HTMLIotDashboardElement;
    };
    interface HTMLIotDashboardDynamicWidgetElement extends Components.IotDashboardDynamicWidget, HTMLStencilElement {
    }
    var HTMLIotDashboardDynamicWidgetElement: {
        prototype: HTMLIotDashboardDynamicWidgetElement;
        new (): HTMLIotDashboardDynamicWidgetElement;
    };
    interface HTMLIotDashboardWidgetElement extends Components.IotDashboardWidget, HTMLStencilElement {
    }
    var HTMLIotDashboardWidgetElement: {
        prototype: HTMLIotDashboardWidgetElement;
        new (): HTMLIotDashboardWidgetElement;
    };
    interface HTMLIotDashboardWrapperElement extends Components.IotDashboardWrapper, HTMLStencilElement {
    }
    var HTMLIotDashboardWrapperElement: {
        prototype: HTMLIotDashboardWrapperElement;
        new (): HTMLIotDashboardWrapperElement;
    };
    interface HTMLIotSelectionBoxElement extends Components.IotSelectionBox, HTMLStencilElement {
    }
    var HTMLIotSelectionBoxElement: {
        prototype: HTMLIotSelectionBoxElement;
        new (): HTMLIotSelectionBoxElement;
    };
    interface HTMLIotSelectionBoxAnchorElement extends Components.IotSelectionBoxAnchor, HTMLStencilElement {
    }
    var HTMLIotSelectionBoxAnchorElement: {
        prototype: HTMLIotSelectionBoxAnchorElement;
        new (): HTMLIotSelectionBoxAnchorElement;
    };
    interface HTMLTestingGroundElement extends Components.TestingGround, HTMLStencilElement {
    }
    var HTMLTestingGroundElement: {
        prototype: HTMLTestingGroundElement;
        new (): HTMLTestingGroundElement;
    };
    interface HTMLElementTagNameMap {
        "iot-context-menu": HTMLIotContextMenuElement;
        "iot-dashboard": HTMLIotDashboardElement;
        "iot-dashboard-dynamic-widget": HTMLIotDashboardDynamicWidgetElement;
        "iot-dashboard-widget": HTMLIotDashboardWidgetElement;
        "iot-dashboard-wrapper": HTMLIotDashboardWrapperElement;
        "iot-selection-box": HTMLIotSelectionBoxElement;
        "iot-selection-box-anchor": HTMLIotSelectionBoxAnchorElement;
        "testing-ground": HTMLTestingGroundElement;
    }
}
declare namespace LocalJSX {
    interface IotContextMenu {
        "x"?: number;
        "y"?: number;
    }
    interface IotDashboard {
        /**
          * Width and height of the cell, in pixels
         */
        "cellSize"?: number;
        /**
          * The configurations which determines which widgets render where with what settings.
         */
        "dashboardConfiguration"?: DashboardConfiguration;
        "move"?: (moveInput: MoveActionInput) => void;
        /**
          * Callback that is fired every time the dashboard configuration has been altered.  When a widget is moved, resized, deleted, appended, or altered, then this method is called
         */
        "onDashboardConfigurationChange"?: (config: DashboardConfiguration) => void;
        /**
          * Whether the dashboard grid will stretch to fit.  If stretch to fit is false, the dashboard grid will be the width in pixels. If not enough room is present, it will utilize scrollbars to allow access to the entire grid.  If stretch to fit is true, the entire grid will scale proportionally to scale to the available space for the grid.
         */
        "stretchToFit"?: Boolean;
        /**
          * Width of the dashboard, in pixels
         */
        "width"?: number;
    }
    interface IotDashboardDynamicWidget {
        "alarms"?: AlarmsConfig;
        "annotations"?: Annotations;
        "axis"?: Axis.Options;
        "componentTag": string;
        "gestures"?: boolean;
        /**
          * Error Messaging
         */
        "invalidTagErrorHeader": string;
        "invalidTagErrorSubheader": string;
        "isEditing"?: boolean;
        "labelsConfig"?: LabelsConfig;
        "layout"?: LayoutConfig;
        "legend"?: LegendConfig;
        "messageOverrides"?: MessageOverrides;
        "movement"?: MovementConfig;
        "queries"?: TimeQuery<TimeSeriesData[], TimeSeriesDataRequest>[];
        "readOnly"?: boolean;
        "scale"?: ScaleConfig;
        "size"?: MinimalSizeConfig;
        "trends"?: Trend[];
        "viewport"?: MinimalViewPortConfig;
        "widgetId": string;
    }
    interface IotDashboardWidget {
        "cellSize"?: number;
        "isMoving"?: boolean;
        "isSelected"?: boolean;
        "viewport"?: MinimalViewPortConfig;
        "widget"?: Widget;
        "width"?: number;
    }
    interface IotDashboardWrapper {
        /**
          * Width and height of the cell, in pixels
         */
        "cellSize"?: number;
        /**
          * The configurations which determines which widgets render where with what settings.
         */
        "dashboardConfiguration"?: DashboardConfiguration;
        /**
          * Callback that is fired every time the dashboard configuration has been altered.  When a widget is moved, resized, deleted, appended, or altered, then this method is called
         */
        "onDashboardConfigurationChange"?: (config: DashboardConfiguration) => void;
        /**
          * Whether the dashboard grid will stretch to fit.
         */
        "stretchToFit"?: Boolean;
        /**
          * Width of the dashboard, in pixels
         */
        "width"?: number;
    }
    interface IotSelectionBox {
        "cellSize"?: number;
        "height"?: number;
        "onResize"?: OnResize;
        "width"?: number;
        "x"?: number;
        "y"?: number;
    }
    interface IotSelectionBoxAnchor {
        "anchor"?: Anchor;
        "onResize"?: OnResize;
    }
    interface TestingGround {
    }
    interface IntrinsicElements {
        "iot-context-menu": IotContextMenu;
        "iot-dashboard": IotDashboard;
        "iot-dashboard-dynamic-widget": IotDashboardDynamicWidget;
        "iot-dashboard-widget": IotDashboardWidget;
        "iot-dashboard-wrapper": IotDashboardWrapper;
        "iot-selection-box": IotSelectionBox;
        "iot-selection-box-anchor": IotSelectionBoxAnchor;
        "testing-ground": TestingGround;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "iot-context-menu": LocalJSX.IotContextMenu & JSXBase.HTMLAttributes<HTMLIotContextMenuElement>;
            "iot-dashboard": LocalJSX.IotDashboard & JSXBase.HTMLAttributes<HTMLIotDashboardElement>;
            "iot-dashboard-dynamic-widget": LocalJSX.IotDashboardDynamicWidget & JSXBase.HTMLAttributes<HTMLIotDashboardDynamicWidgetElement>;
            "iot-dashboard-widget": LocalJSX.IotDashboardWidget & JSXBase.HTMLAttributes<HTMLIotDashboardWidgetElement>;
            "iot-dashboard-wrapper": LocalJSX.IotDashboardWrapper & JSXBase.HTMLAttributes<HTMLIotDashboardWrapperElement>;
            "iot-selection-box": LocalJSX.IotSelectionBox & JSXBase.HTMLAttributes<HTMLIotSelectionBoxElement>;
            "iot-selection-box-anchor": LocalJSX.IotSelectionBoxAnchor & JSXBase.HTMLAttributes<HTMLIotSelectionBoxAnchorElement>;
            "testing-ground": LocalJSX.TestingGround & JSXBase.HTMLAttributes<HTMLTestingGroundElement>;
        }
    }
}
