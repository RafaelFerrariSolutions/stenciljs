import { Component, h } from '@stencil/core';

@Component({
  tag: 'rfs-text-box-item',
  styleUrl: 'text-box-item.scss',
})
export class TextBoxItem {
  render() {
    return (
      <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-6 sm-margin-b-30">
        <div class="margin-b-60">
            <h2>Venda mais, anuncie melhor</h2>
            <p>Com um site profissional, você pode e deve vinculá-lo ao seus anúncios de propaganda para atrair mais clientes.</p>
            <p>É simples, todos procuram alguém de confiança, e o site transmite a mensagem necessária.</p>
            <h6><slot></slot></h6>
        </div>
      </div>
    );
  }

}
