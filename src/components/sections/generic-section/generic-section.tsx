import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-generic-section',
  styleUrl: 'generic-section.scss',
})
export class ServicesSection {
  @Prop() styleId: string
  @Prop() bgColor: string

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--bgcolor', this.bgColor)
  }

  render() {
    return (
      <Host id={this.styleId}>
        <section class="py-1"><slot></slot></section>
      </Host>
    );
  }
}
