import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery';

@Component({
  tag: 'rfs-badge-title',
  styleUrl: 'badge-title.scss',
})
export class BadgeTitleComponent {
  /**
   * Define a id to this component, used for style her
   */
  @Prop() styleId: string

  /**
   * Text color of component
   */
  @Prop() color: string = "#000"

  /**
   * Background color of component
   */
  @Prop() bgColor: string = "#FFF"

  componentDidLoad() {
    if (!this.styleId) return

    let element = $(`#${this.styleId}`)
    element.css('color', this.color)
    element.css('backgroundColor', this.bgColor)
  }

  render() {
    return (
      <h3 class="my-4 text-center">
        <span id={this.styleId} class="badge"><slot></slot></span>
      </h3>
    );
  }
}
