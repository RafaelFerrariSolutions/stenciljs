import { Component, Prop, Host, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-footer',
  styleUrl: 'footer.scss',
})
export class Footer {
  @Prop() styleId: string
  @Prop() color: string = '#f524bf'
  @Prop() textGradientLeft: string = '#008cb0'
  @Prop() textGradientRight: string = '#009848'
  @Prop() bgColor: string = '#000'

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

  render() {
    return (
      <Host id={this.styleId}>
        <footer>
          <div class="text-center p-3">
            <a href="https://rafaelferrarisolutions.com.br/" target="_blank">
              <span class="tm-current-year">2021</span> © RF Solutions
            </a>
          </div>
        </footer>
      </Host>
    );
  }
}
