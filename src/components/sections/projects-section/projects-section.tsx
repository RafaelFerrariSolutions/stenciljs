import { Component, Host, Prop, h } from '@stencil/core'
import $ from 'jquery'
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-projects-section',
  styleUrl: 'projects-section.scss',
  assetsDirs: ['img'],
})
export class ProjectsSection {
  @Prop() styleId: string
  @Prop() project: string
  @Prop() bgProject: string = "#044e66"
  @Prop() projectColor: string = '#fff'
  @Prop() descriptionColor: string = '#07608a'
  @Prop() bgTop: string = '#07608a'
  @Prop() bgBottom: string = '#fff'
  @Prop() projectImage: string
  @Prop() myLogo: string
  @Prop() rtl: boolean = false

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--project-color', this.projectColor)
    element.css('--description-color', this.descriptionColor)
    element.css('--bg-project', this.bgProject)
    element.css('--bg-top', this.bgTop)
    element.css('--bg-bottom', this.bgBottom)
    element.css('--my-logo', this.myLogo)

    if (this.rtl) {
      element.addClass('rtl')
    }
  }

  render() {
    if (this.rtl) {
      return (
        <Host id={this.styleId}>
          <div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-9 text-left">
                  <img src={this.projectImage} />
                </div>
  
                <div class="col-3 project">
                  <span>{this.project}</span>
                </div>
              </div>
  
              <div class="row">
                <div class="col-12 description">
                  <p>
                    <slot></slot>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Host>
      )
    }

    return (
      <Host id={this.styleId}>
        <div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-3 project">
                <span>{this.project}</span>
              </div>

              <div class="col-9 text-right">
                <img src={this.projectImage} />
              </div>
            </div>

            <div class="row">
              <div class="col-12 description">
                <p>
                  <slot></slot>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
