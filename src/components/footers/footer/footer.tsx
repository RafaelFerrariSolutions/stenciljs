import { Component, Prop, h } from '@stencil/core'
import $ from 'jquery'

@Component({
  tag: 'rfs-footer',
  styleUrl: 'footer.scss',
})
export class FooterComponent {
  @Prop() styleId: string;
  @Prop() color: string = '#f524bf';
  @Prop() textGradientLeft: string = '#008cb0';
  @Prop() textGradientRight: string = '#009848';
  @Prop() bgColor: string = '#000';

  componentDidLoad() {
    if (!this.styleId) return

    let element = $(`#${this.styleId}`)
    element.setProperty('--text-color', this.color)
    element.setProperty('--text-gradient-left', this.textGradientLeft)
    element.setProperty('--text-gradient-right', this.textGradientRight)
    element.setProperty('--background-color', this.bgColor)
  }

  render() {
    return (
      <footer>
        <div class="text-center p-3">
          <a href="https://rafaelferrarisolutions.com.br/" target="_blank">
            <span class="tm-current-year">2021</span> © RF Solutions
          </a>
        </div>
      </footer>
    );
  }
}
