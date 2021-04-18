import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery'

@Component({
  tag: 'rfs-intro-title',
  styleUrl: 'intro-title.scss',
})
export class IntroTitleComponent {
  @Prop() fontSize: number = 5;
  @Prop() styleId: string
  @Prop() color: string = "#000"

  uuid() {
    let dateTime = new Date().getTime()
    this.styleId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(item) {
        let random = (dateTime + Math.random() * 16) % 16 | 0;
        dateTime = Math.floor(dateTime / 16);
        return (item == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
    })
  }

  componentWillLoad() {
    this.uuid()
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
      <h1 class={this.renderClasses()} id={this.styleId}>
        <slot></slot>
      </h1>
    );
  }

}
