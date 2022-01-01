import { Component, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../../utils/utils'


@Component({
  tag: 'rfs-text-box',
  styleUrl: 'text-box.scss',  
})
export class TextBox {
  @Prop() styleId: string;
  @Prop() bgColor: string = "transparent";

  alignItems(): void {
    $('rfs-text-box').each(function() {
      if ($(this).find('rfs-text-box-item').length % 2 != 0) {
        $(this).find('rfs-text-box-item').last().addClass('offset-sm-3');
      }
    })
  }

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('backgroundColor', this.bgColor)
  }

  render() {
    this.alignItems()

    return (
      <div class="container"  id={this.styleId}>
        <div class="row">
          <slot></slot>
        </div>
      </div>
    );
  }

}
