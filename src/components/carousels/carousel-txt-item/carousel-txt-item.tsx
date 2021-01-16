import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-carousel-txt-item',
  styleUrl: 'carousel-txt-item.scss',
})
export class CarouselTxtItem {

  render() {
    return (
      <Host class="swiper-slide slide">
        <slot></slot>
      </Host>
    );
  }
}
