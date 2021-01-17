import { Component, h } from '@stencil/core';

@Component({
  tag: 'rfs-text-box-item',
  styleUrl: 'text-box-item.scss',
})
export class TextBoxItem {
  render() {
    return (
      <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-6 sm-margin-b-30">
        <div class="margin-b-60">
            <slot></slot>
        </div>
      </div>
    );
  }

}
