import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-float-header-item',
  styleUrl: 'float-header-item.scss',
})
export class FloatHeaderItemComponent {
  /**
   * Define a âncora do botão.
   */
  @Prop() target: string = '#';
 

  render() {
    return (
      <Host class="col">
        <li class="nav-item">
          <a class="nav-link" href={this.target}><slot></slot></a>
        </li>
      </Host>
    );
  }
}

