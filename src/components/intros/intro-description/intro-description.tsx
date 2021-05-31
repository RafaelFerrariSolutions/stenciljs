import { Component, Prop, h, Host } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-intro-description',
  styleUrl: 'intro-description.scss',
})
export class IntroDescription {
  @Prop() styleId: string
  @Prop() color: string = "#fff"

  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('color', this.color)
  }


  render() {
    return (
      <Host id={this.styleId}>
      <p id={this.styleId}><slot></slot></p>
      </Host>
    );
  }

}
