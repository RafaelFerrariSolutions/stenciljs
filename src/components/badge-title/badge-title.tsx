import { Component, Prop, h } from '@stencil/core'
import $ from 'jquery'

@Component({
  tag: 'rfs-badge-title',
  styleUrl: 'badge-title.scss',
})
export class BadgeTitleComponent {
  @Prop() styleId: string
  @Prop() color: string = "#000"
  @Prop() bgColor: string = "#FFF"

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
    element.css('color', this.color)
    element.css('backgroundColor', this.bgColor)
  }

  render() {
    return (
      <h3 class="my-4 text-center">
        <span id={this.styleId} class="badge"><slot></slot></span>
      </h3>
    );
  }
}
