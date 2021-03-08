import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-float-footer',
  styleUrl: 'float-footer.scss',
})
export class FloatFooterComponent {
  /**
   * Variáveis CSS
   * --text-gradient-left para definir a cor do lado esquerdo do texto
   * --text-gradient-right para definir a cor lado direito do text
   * --background-color para definir a cor de fundo, usar RGBA 
   * --text-color: para definir cor sólida
   */
  @Prop() color: void;

  /**
   * Define o quão arrendodado será. Escolher entre 1 e 5
   */
  @Prop() radius: number = 5;

  handleRadius(): string {
    if (!(this.radius in [ 1,2,3,4,5,6 ])) {
      return ''
    }

    return `radius-${this.radius}`
  }

  render() {
    return (
      <Host class={this.handleRadius()}>
        <div class="text-center p-2">
          <a href="https://rafaelferrarisolutions.com.br/" target="_blank">
            <span class="tm-current-year">2021</span> © RF Solutions
          </a>
        </div>
      </Host>
    );
  }
}
