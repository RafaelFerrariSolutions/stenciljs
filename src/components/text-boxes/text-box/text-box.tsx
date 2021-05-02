import { Component, Prop, h } from '@stencil/core'
import $ from 'jquery';

@Component({
  tag: 'rfs-text-box',
  styleUrl: 'text-box.scss',  
})
export class TextBox {
  @Prop() styleId: string;
  @Prop() bgColor: string = "transparent";

  alignItems(): void {
    $('rfs-text-box').each(function() {
      if ($(this).find('rfs-text-box-item').length % 2 != 0) {
        $(this).find('rfs-text-box-item').last().addClass('offset-sm-3');
      }
    })
  }

  uuid() {
    let dateTime = new Date().getTime()
    this.styleId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(item) {
      let random = (dateTime + Math.random() * 16) % 16 | 0;
      dateTime = Math.floor(dateTime / 16);
      return (item == 'x' ? random : (random & 0x3 | 0x8)).toString(16)
    })
  }

  componentWillLoad() {
    this.uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('backgroundColor', this.bgColor)
  }

  render() {
    this.alignItems()

    return (
      <div class="container"  id={this.styleId}>
        <div class="row">
          <slot></slot>
        </div>
      </div>
    );
  }

}
