import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'


@Component({
  tag: 'rfs-intro-btn',
  styleUrl: 'intro-btn.scss',
})
export class IntroBtn {
  @Prop() styleId: string
  @Prop() target: string = null;
  @Prop() color: string = "black"
  @Prop() bgColor: string = "transparent"

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

  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.bgColor)
  }

  render() {
    return (
      <Host id={this.styleId}>
      <a href={this.renderTarget()}  class="btn-theme btn-theme-sm btn-white-brd text-uppercase">
        <slot></slot>
      </a>
      </Host>
    );
  }

}
