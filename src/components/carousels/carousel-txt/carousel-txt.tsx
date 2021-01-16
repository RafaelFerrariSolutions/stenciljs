import { Component, h } from '@stencil/core';
import $ from 'jquery';
import Swiper from 'swiper/bundle';

@Component({
  tag: 'rfs-carousel-txt',
  styleUrl: 'carousel-txt.scss',
})
export class CarouselTxt {
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

    // return (
    //   <div class="transition-box">
    //     <div class="transition left-top"></div>
    //     <div class="transition right-top"></div>
    //     <div class="transition left-bottom"></div>
    //     <div class="transition right-bottom"></div>
    //     <div class="fixed">
    //       <slot></slot>
    //     </div>
    //   </div>
    // );

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
