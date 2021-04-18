import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery'


@Component({
  tag: 'rfs-intro-btn',
  styleUrl: 'intro-btn.scss',
})
export class IntroBtnComponent {
  @Prop() target: string = null;
  @Prop() styleId: string
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
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.bgColor)
  }

  render() {
    return (
      <a href={this.renderTarget()} id={this.styleId} class="btn-theme btn-theme-sm btn-white-brd text-uppercase">
        <slot></slot>
      </a>
    );
  }

}
