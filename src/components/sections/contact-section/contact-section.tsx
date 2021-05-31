import { Component, Prop, Host, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-contact-section',
  styleUrl: 'contact-section.scss',
  assetsDirs: ['img'],
})
export class ContactSection {
  @Prop() styleId: string
  @Prop() logoImg: string
  @Prop() profileImg: string
  @Prop() color: string = '#b3b800'
  @Prop() rtl: boolean

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--profile-img', this.profileImg)
    element.css('--color', this.color)

    if (this.rtl) {
      element.addClass('rtl')
    }
  }

  render() {
    if (this.rtl) {
      return (
        <Host id={this.styleId}>
          <div class="container-fluid my-3">
            <div class="row">
              <div class="col-8 px-0">
                <div class="profile-image"></div>
                <div class="contact-data">
                  <slot></slot>
                </div>
              </div>
  
              <div class="col-4 px-0">
                <img class="logo" src={this.logoImg} />
              </div>
            </div>
          </div>
        </Host>
      )
    }

    return (
      <Host id={this.styleId}>
        <div class="container-fluid my-3">
          <div class="row">
            <div class="col-4 px-0">
              <img class="logo" src={this.logoImg} />
            </div>

            <div class="col-8 px-0">
              <div class="profile-image"></div>
              <div class="contact-data">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    )
  }

}
