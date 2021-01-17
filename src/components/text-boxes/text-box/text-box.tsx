import { Component, h } from '@stencil/core';
import $ from 'jquery';

@Component({
  tag: 'rfs-text-box',
  styleUrl: 'text-box.scss',
})
export class TextBox {
  private alignItems(): void {
    $('rfs-text-box').each(function() {
      if ($(this).find('rfs-text-box-item').length % 2 != 0) {
        $(this).find('rfs-text-box-item').last().addClass('offset-sm-3');
      }
    })
  }

  render() {
    this.alignItems();

    return (
      <div class="container">
        <div class="row">
          <slot></slot>
        </div>
      </div>
    );
  }

}
