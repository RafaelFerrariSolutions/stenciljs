import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-slider-animated',
  styleUrl: 'slider-animated.scss',
})
export class SliderAnimatedItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
