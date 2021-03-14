import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-parallax-image',
  styleUrl: 'parallax-image.scss',
  assetsDirs: ['assets'],
})
export class ParallaxImage {
  render() {
    return (
      <Host>
        <div class="parallax-image"></div>
      </Host>
    );
  }
}
