import { Component, Host, Prop, h } from '@stencil/core'
import Swiper from 'swiper/bundle';
import $ from 'jquery';
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-carousel-txt',
  styleUrl: 'carousel-txt.scss',
})
export class CarouselTxt {
  @Prop() styleId: string

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

  componentWillLoad() {
    this.styleId = uuid()
    }

    componentDidLoad() {
      // let element = $(`#${this.styleId}`)
    }

  render() {
    this.carousel();

    

    return (
      <div>
        <Host id={this.styleId}>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        </Host>
      </div>
    )
  }
}
