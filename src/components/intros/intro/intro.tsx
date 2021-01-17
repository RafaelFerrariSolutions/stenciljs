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

  render() {
    return (
      <section>
        <div class="container">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </section>
    );
  }

}
