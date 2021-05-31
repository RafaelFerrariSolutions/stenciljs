import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-parallax-image',
  styleUrl: 'parallax-image.scss',
  assetsDirs: ['assets'],
})
export class ParallaxImage {
  @Prop() styleId: string
  @Prop() deskImage: string = "";
  @Prop() mobileImage: string = "";


  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--desk-background-image', this.deskImage)
    element.css('--mobile-background-image', this.mobileImage)
  }

  render() {
    return (
      <Host id={this.styleId}>
      <div class="parallax-image" id={this.styleId}>
        <slot></slot>
      </div>
      </Host>
    );
  }
}
