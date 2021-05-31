import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-generic-section-item',
  styleUrl: 'generic-section-item.scss',
  assetsDirs: ['img'],
})
export class GenericSectionItem {
  @Prop() styleId: string
  @Prop() image: string
  @Prop() color: string = '#fff'

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--image', this.image)
    element.css('--color', this.color)
  }

  render() {
    return (
      <Host id={this.styleId}>
        <div class="image" />

        <h4>
          <slot></slot>
        </h4>
      </Host>
    );
  }

}
