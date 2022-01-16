import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../../utils/utils'

@Component({
  tag: 'rfs-modal-box',
  styleUrl: 'modal-box.scss',
})
export class ModalBox {
  @Prop() styleId: string
  @Prop() bgColor: string = "#ffff" 
  @Prop() color: string = "black" 
  @Prop() titleColor: string = "#fff" 
  @Prop() rangeColor: string = "#009688" 
  @Prop() outTitleColor: string = "#black"

  
  componentWillLoad() {
    this.styleId = uuid()
    }
  
  componentDidLoad() {
          var modal = document.getElementById("id01")

        document.getElementById('id01').onclick = function(){
          if (event.target == modal) {
              modal.style.display = "none"
          }
        }
       
    let element = $(`#${this.styleId}`)
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.titleColor)
    element.css('--bg-color', this.bgColor)
    element.css('--range-color', this.rangeColor)
    element.css('--out-title-color', this.outTitleColor)
}


  render() {
    return (
      <Host  id={this.styleId}>
     
        </Host>
    );
  }

}
