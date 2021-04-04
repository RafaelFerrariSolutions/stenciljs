import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-parallax-image-vertical-repeat',
  styleUrl: 'parallax-image-vertical-repeat.scss',
  assetsDirs: ['assets'],
})
export class ParallaxImageVerticalRepeat {
  render() {
    return (
      <Host>
        <div class="parallax-image">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
