import { Component, Prop, h } from '@stencil/core'
import $ from 'jquery'

@Component({
  tag: 'rfs-intro-description',
  styleUrl: 'intro-description.scss',
})
export class IntroDescriptionComponent {
  @Prop() styleId: string
  @Prop() color: string = "#fff"

  uuid() {
    let dateTime = new Date().getTime()
    this.styleId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(item) {
        let random = (dateTime + Math.random() * 16) % 16 | 0;
        dateTime = Math.floor(dateTime / 16);
        return (item == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
    })
  }

  componentWillLoad() {
    this.uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('color', this.color)
  }


  render() {
    return (
      <p id={this.styleId}><slot></slot></p>
    );
  }

}
