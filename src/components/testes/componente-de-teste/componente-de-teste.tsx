import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'componente-de-teste',
  styleUrl: 'componente-de-teste.css',
  shadow: true,
})
export class ComponenteDeTeste {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
