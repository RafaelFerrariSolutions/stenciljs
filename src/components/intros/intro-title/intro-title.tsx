import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro-title',
  styleUrl: 'intro-title.scss',
})
export class IntroTitleComponent {
  /**
   * Define o tamanho do texto (1 a 5).
   */
  @Prop() fontSize: number = 5;

  private renderClasses(): string {
    switch(this.fontSize) {
      case 1:
        return 's-1';
      case 2:
        return 's-2';
      case 3:
        return 's-3';
      case 4:
        return 's-4';
      case 5:
        return 's-5';
      default:
        return 's-5';
    }
  }

  render() {
    return (
      <h1 class={this.renderClasses()}>
        <slot></slot>
      </h1>
    );
  }

}
