import { Component, h } from '@stencil/core';
import Swiper from 'swiper/bundle';
import $ from 'jquery';

@Component({
  tag: 'rfs-carousel-txt',
  styleUrl: 'carousel-txt.scss',
})
export class CarouselTxtComponent {
  private carousel() {
    $(document).ready(function() {
      new Swiper('.swiper-container', {
        loop: true,
        speed: 1800,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
  }

  render() {
    this.carousel();

    return (
      <div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
