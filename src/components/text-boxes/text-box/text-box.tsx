import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rfs-text-box',
  styleUrl: 'text-box.scss',
})
export class TextBox {

  render() {
    return (
      <Host>
        <div id="about">
          <div class="content-lg container">
            <div class="masonry-grid row"></div>
            <slot>
              
            </slot>
          </div>
        </div>
      </Host>
    );
  }

}
