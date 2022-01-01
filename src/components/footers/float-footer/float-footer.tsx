import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-float-footer',
  styleUrl: 'float-footer.scss',
})
export class FloatFooter {
  @Prop() styleId: string;
  @Prop() color: string = '#f524bf';
  @Prop() textGradientLeft: string = '#008cb0';
  @Prop() textGradientRight: string = '#009848';
  @Prop() bgColor: string = 'rgba(0, 0, 0, .75)';
  @Prop() radius: number = 5;

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--text-color', this.color)
    element.css('--text-gradient-left', this.textGradientLeft)
    element.css('--text-gradient-right', this.textGradientRight)
    element.css('--background-color', this.bgColor)
  }

  handleRadius(): string {
    if (!(this.radius in [ 1,2,3,4,5,6 ])) {
      return ''
    }

    return `radius-${this.radius}`
  }

  render() {
    return (
      <Host id={this.styleId} class={this.handleRadius()}>
        <div class="text-center p-2">
          <a href="https://rafaelferrarisolutions.com.br/" target="_blank">
            <span class="tm-current-year">2022</span> © RF Solutions
          </a>
        </div>
      </Host>
    );
  }
}
