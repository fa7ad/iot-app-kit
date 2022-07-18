import { Component, Prop, h, Host, Watch, State, Listen } from '@stencil/core';

@Component({
  tag: 'iot-context-menu',
  styleUrl: 'iot-context-menu.css',
  shadow: false,
})
export class IotContextMenu {
  @Prop() x: number;
  @Prop() y: number;

  @Listen('mousedown')
  onMouseDown(event: MouseEvent) {
    console.log(event);
    event.stopPropagation();
    return;
  }

  render() {
    console.log(this.x);
    console.log(this.y);

    return (
      <div
        class="iot-context-menu"
        style={{
          left: `${this.x}px`,
          top: `${this.y}px`,
        }}
      >hey</div>
    );
  }
}
