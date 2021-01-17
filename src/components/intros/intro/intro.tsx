import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro',
  styleUrl: 'intro.scss',
  assetsDirs: ['assets'],
})
export class IntroComponent {
  /**
   * Use as variáveis CSS --image e --image-mobile para alterar o background-image.
   */
  @Prop() image: void;

  /**
   * Define a âncora do elemento atual.
   */
  @Prop() anchor: string = 'intro';

  render() {
    return (
      <section id={this.anchor}>
        <div class="container">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </section>
    );
  }

}
