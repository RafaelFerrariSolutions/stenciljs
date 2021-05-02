import { Component, Host, Prop,  h } from '@stencil/core';
import $ from 'jquery'

@Component({
  tag: 'rfs-text-box-item',
  styleUrl: 'text-box-item.scss',
})
export class TextBoxItem {
  @Prop() styleId: string;
  @Prop() color: string = "#515769";
  @Prop() titleColor: string = "#a6a7aa";

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
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.titleColor)
  }

  render() {
    return (
      <Host class="col-xs-12 col-sm-6 px-sm-5 py-sm-5 pt-5 pb-0 mb-0"  id={this.styleId}>
        <slot></slot>
      </Host>
    );
  }
}
