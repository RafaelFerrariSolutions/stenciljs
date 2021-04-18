import { Component, Host, Prop, h } from '@stencil/core';
import $ from 'jquery'


@Component({
  tag: 'rfs-float-header-item',
  styleUrl: 'float-header-item.scss',
})
export class FloatHeaderItemComponent {
  @Prop() target: string = '#';
  @Prop() styleId: string
  @Prop() color: string = "white"
  @Prop() bgColor: string = "rgba(255, 255, 255, .15)"
  @Prop() bgColorHover: string

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
    element.css('--color', this.color)
    element.css('--bgColor', this.bgColor)
    element.css('--bgColorHover', this.bgColorHover)
  }


  render() {
    return (
      <Host class="col" id={this.styleId}>
        <li class="nav-item">
          <a class="nav-link" href={this.target} ><slot></slot></a>
        </li>
      </Host>
    );
  }
}

