import { Component, Prop, Host, h } from '@stencil/core';
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-intro',
  styleUrl: 'intro.scss',
  assetsDirs: ['assets'],
})
export class Intro {
  @Prop() styleId: string
  @Prop() anchor: string = 'intro';
  @Prop() imgDesk: string = "";
  @Prop() imgMobile: string = "";


  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--image', this.imgDesk)
    element.css('--image-mobile', this.imgMobile)
  }

  render() {
    return (
      <Host id={this.styleId}>
        <section id={this.anchor} >
          <div class="container">
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </section>
      </Host>
    );
  }

}
