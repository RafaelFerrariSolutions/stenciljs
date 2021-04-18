import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro',
  styleUrl: 'intro.scss',
  assetsDirs: ['assets'],
})
export class IntroComponent {
  @Prop() image: void;
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
