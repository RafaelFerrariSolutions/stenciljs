import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../../utils/utils'

@Component({
  tag: 'rfs-modal-box-item',
  styleUrl: 'modal-box-item.scss',
})
export class ModalBoxItem {
  @Prop() styleId: string
  @Prop() bgColor: string = "green" //fundo do modal
  @Prop() color: string = "black" //texto principal
  @Prop() titleColor: string = "black" //titulo
  @Prop() borderColor: string = "black" //borda


  componentWillLoad() {
    this.styleId = uuid()
    }

    componentDidLoad() {
      let element = $(`#${this.styleId}`)
      element.css('--primary-color', this.color)
      element.css('--secondary-color', this.titleColor)
      element.css('--bg-color', this.bgColor)
      element.css('--border-color', this.borderColor)
      }


  render() {
    return (
      <Host id={this.styleId}>
        <div></div>

        <slot>
        </slot>
      </Host>
    );
  }
}
