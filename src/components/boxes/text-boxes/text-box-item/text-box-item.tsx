import { Component, Host, Prop,  h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../../utils/utils'


@Component({
  tag: 'rfs-text-box-item',
  styleUrl: 'text-box-item.scss',
})
export class TextBoxItem {
  @Prop() styleId: string;
  @Prop() color: string = "#515769";
  @Prop() titleColor: string = "#a6a7aa";


  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.titleColor)
  }

  render() {
    return (
      <Host class="col-xs-12 col-sm-6 px-sm-5 py-sm-5 pt-5 pb-0 mb-0"  id={this.styleId}>
        <slot></slot>
      </Host>
    );
  }
}
