import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery'


@Component({
  tag: 'rfs-parallax-image-vertical-repeat',
  styleUrl: 'parallax-image-vertical-repeat.scss',
  assetsDirs: ['assets'],
})
export class ParallaxImageVerticalRepeat {
  @Prop() styleId: string
  @Prop() deskImage: string = "";
  @Prop() mobileImage: string = "";

  uuid() {
    let dateTime = new Date().getTime()
    this.styleId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(item) {
        let random = (dateTime + Math.random() * 16) % 16 | 0;
        dateTime = Math.floor(dateTime / 16);
        return (item == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
    })
  }

  componentWillLoad() {
    this.uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--desk-background-image', this.deskImage)
    element.css('--mobile-background-image', this.mobileImage)
  }

  render() {
    return (
     
        <div class="parallax-image" id={this.styleId}>
          <slot></slot>
        </div>
    
    );
  }
}
