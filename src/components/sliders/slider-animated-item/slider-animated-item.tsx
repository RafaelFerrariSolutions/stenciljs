import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-slider-animated-item',
  styleUrl: 'slider-animated-item.scss',
})
export class SliderAnimatedItemComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
