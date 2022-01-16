import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'componente-de-teste',
  styleUrl: 'componente-de-teste.scss',
  // shadow: true,
})
export class ComponenteDeTeste {
  

  render() {        
        // document.getElementById('id01').onclick = function(){
        //   console.log("entrou");

        var modal = document.getElementById("id01")

        document.getElementById('id01').onclick = function(){
          if (event.target == modal) {
              modal.style.display = "none"
          }
        }

      
        

    return (
      <Host>
       
      </Host>
    );
  }

}
