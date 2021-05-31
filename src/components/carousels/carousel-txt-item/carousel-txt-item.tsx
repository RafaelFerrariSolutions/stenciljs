import { Component, Host, Prop, h } from '@stencil/core'
// import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-carousel-txt-item',
  styleUrl: 'carousel-txt-item.scss',
})
export class CarouselTxtItem {
  @Prop() styleId: string

  componentWillLoad() {
    this.styleId = uuid()
    }

    componentDidLoad() {
      // let element = $(`#${this.styleId}`)
      }

  render() {
    return (
      <Host class="swiper-slide slide" id={this.styleId}>
        <slot></slot>
      </Host>
    );
  }
}
