import { Component, h } from '@stencil/core';

@Component({
  tag: 'rfs-float-header',
  styleUrl: 'float-header.scss',
})
export class FloatHeaderComponent {
  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-sm">
        <ul class="navbar-nav row">
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
