import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'componente-de-teste',
  styleUrl: 'componente-de-teste.scss',
  // shadow: true,
})
export class ComponenteDeTeste {
  

  render() {       
  console.log("entrou no componente de teste");

        

    return (
      
      <Host>
       
      </Host>
    );
  }

}
