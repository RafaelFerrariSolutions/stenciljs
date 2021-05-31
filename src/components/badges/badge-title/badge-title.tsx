import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-badge-title',
  styleUrl: 'badge-title.scss',
})
export class BadgeTitle {
  @Prop() styleId: string
  @Prop() color: string = "#000"
  @Prop() bgColor: string = "#fff"

  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.find('.badge').css('color', this.color)
    element.find('.badge').css('backgroundColor', this.bgColor)
  }

  render() {
    return (
      <Host id={this.styleId}>
        <div>
          <span class="my-4 badge">
            <slot></slot>
          </span>
        </div>
      </Host>
    )
  }
}
