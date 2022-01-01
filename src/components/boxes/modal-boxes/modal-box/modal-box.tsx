import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../../utils/utils'

@Component({
  tag: 'rfs-modal-box',
  styleUrl: 'modal-box.scss',
})
export class ModalBox {
  @Prop() styleId: string
  @Prop() bgColor: string = "transparent";

  
  componentWillLoad() {
    this.styleId = uuid()
    }
  
  componentDidLoad() {
           let element = $(`#${this.styleId}`)
           element.css('backgroundColor', this.bgColor)
            var modal = document.getElementById("myModal")
            var btn = document.getElementById("myBtn")
            var span = document.getElementById("close")
            btn.onclick = function() {
                modal.style.display = "block"
            }
            span.onclick = function() {
              modal.style.display = "none"
          }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none"
                }
            }
    }


  render() {
    return (
      <Host id={this.styleId}>
      <slot>
        
        </slot>
        </Host>
    );
  }

}
