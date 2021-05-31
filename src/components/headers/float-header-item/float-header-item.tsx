import { Component, Host, Prop, h } from '@stencil/core';
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-float-header-item',
  styleUrl: 'float-header-item.scss',
})
export class FloatHeaderItem {
  @Prop() styleId: string
  @Prop() target: string = '#';
  @Prop() color: string = "white"
  @Prop() bgColor: string = "rgba(255, 255, 255, .15)"
  @Prop() bgColorHover: string

  componentWillLoad() {
    this.styleId = uuid()
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

