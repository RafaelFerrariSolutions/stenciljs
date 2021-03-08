import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-footer',
  styleUrl: 'footer.scss',
})
export class FooterComponent {
  /**
   * Variáveis CSS
   * --text-gradient-left para definir a cor do lado esquerdo do texto
   * --text-gradient-right para definir a cor lado direito do text
   * --background-color para definir a cor de fundo
   * --text-color: para definir cor sólida
   */
  @Prop() color: void;

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
