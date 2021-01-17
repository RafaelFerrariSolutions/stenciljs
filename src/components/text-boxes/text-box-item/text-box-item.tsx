import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-text-box-item',
  styleUrl: 'text-box-item.scss',
})
export class TextBoxItem {
  render() {
    return (
      <Host class="col-xs-12 col-sm-6 px-sm-5 py-sm-5 pt-5 pb-0 mb-0">
        <slot></slot>
      </Host>
    );
  }
}
