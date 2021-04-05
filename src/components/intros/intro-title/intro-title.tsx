import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro-title',
  styleUrl: 'intro-title.scss',
})
export class IntroTitleComponent {
  /**
   * Define o tamanho do texto (1 a 4).
   */
  @Prop() fontSize: number = 5;

  private renderClasses(): string {
    if (!(this.fontSize in [1,2,3,4,5,6])) {
      throw "Invalid font size!";
    }

    return `s-${this.fontSize}`;
  }

  render() {
    return (
      <h1 class={this.renderClasses()}>
        <slot></slot>
      </h1>
    );
  }

}
