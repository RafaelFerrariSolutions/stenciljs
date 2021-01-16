import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro',
  styleUrl: 'intro.scss',
  shadow: true,
})
export class RfsIntro {

  render() {
    return (
      <Host>
        <section class="presentation">
          <div class="container">
            <div class="content">
              <h1 class="title color-white">Soluções Hi-End</h1>
              <p class="color-white">Soluções digitais de alto padrão para seu negócio.</p>
              <p class="color-white">Impulsione seu crescimento</p>
              <a href="#about" class="btn-theme btn-theme-sm btn-white-brd text-uppercase">Detalhes</a>
            </div>
          </div>
        </section>
      </Host>
    );
  }

}
