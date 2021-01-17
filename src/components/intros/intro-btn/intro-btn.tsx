import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro-btn',
  styleUrl: 'intro-btn.scss',
})
export class IntroBtnComponent {
  /**
   * O path de destino do botão (âncora ou URL).
   */
  @Prop() target: string = null;

  private renderTarget(): string {
    if (!this.target) {
      return '#';
    }

    if (this.isUrl()) {
      new URL(this.target);

      return this.target;
    } else {
      return '#' + this.target;  
    }
  }

  private isUrl(): boolean {
    try {
      new URL(this.target);

      return true;
    } catch (_) {
      return false;  
    }
  }

  render() {
    return (
      <a href={this.renderTarget()} class="btn-theme btn-theme-sm btn-white-brd text-uppercase">
        <slot></slot>
      </a>
    );
  }

}
