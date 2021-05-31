import { Component, Host, Prop, h } from '@stencil/core'
// import $ from 'jquery'
import { uuid, teste  } from '../../../utils/utils'

@Component({
  tag: 'componente-de-teste',
  styleUrl: 'componente-de-teste.scss',
})
export class ComponenteDeTeste {
  @Prop() styleId: string

  componentWillLoad() {
    this.styleId = uuid()
    }
    componentDidLoad() {
    // let element = $(`#${this.styleId}`)
    }

  render() {
    teste()
    return (
      <Host id={this.styleId}>
        <slot></slot>
      </Host>
    );
  }

}
