import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-badge-title',
  styleUrl: 'badge-title.scss',
})
export class BadgeTitleComponent {
  @Prop() styleId: string
  @Prop() bgColor: string = "#fff"
  @Prop() color: string = "#000"

  componentDidLoad() {
    if (!this.styleId) return

    let element = document.querySelector<HTMLElement>(`#${this.styleId}`)
    element.style.color = this.color
    element.style.backgroundColor = this.bgColor
  }

  render() {
    return (
      <h3 class="my-4 text-center">
        <span id={this.styleId} class="badge"><slot></slot></span>
      </h3>
    );
  }
}
