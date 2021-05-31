import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-intro-title',
  styleUrl: 'intro-title.scss',
})
export class IntroTitle {
  @Prop() styleId: string
  @Prop() fontSize: number = 5;
  @Prop() color: string = "#000"

  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('color', this.color)
  }


  private renderClasses(): string {
    if (!(this.fontSize in [1,2,3,4,5,6])) {
      throw "Invalid font size!";
    }

    return `s-${this.fontSize}`;
  }

  render() {
    return (
      <Host id={this.styleId}>
      <h1 class={this.renderClasses()}>
        <slot></slot>
      </h1>
      </Host>
    );
  }

}
