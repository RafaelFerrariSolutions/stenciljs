import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery'

@Component({
  tag: 'rfs-intro',
  styleUrl: 'intro.scss',
  assetsDirs: ['assets'],
})
export class IntroComponent {
  @Prop() image: void;
  @Prop() anchor: string = 'intro';
  @Prop() styleId: string
  @Prop() imgDesk: string = ""
  @Prop() imgMobile: string = ""


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
    element.css('--image', this.imgDesk)
    element.css('--image-mobile', this.imgMobile)
  }

  render() {
    return (
      <section id={this.anchor} >
        <div class="container" id={this.styleId}  >
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </section>
    );
  }

}
