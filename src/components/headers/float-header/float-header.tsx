import { Component, Prop, Host, h, } from '@stencil/core'
import $ from 'jquery'
import { uuid, slowScroll  } from '../../../utils/utils'

@Component({
  tag: 'rfs-float-header',
  styleUrl: 'float-header.scss',
})
export class FloatHeader {
  @Prop() styleId: string
  @Prop() fixed: boolean = false

  componentWillLoad() {
    this.styleId = uuid()
  }

  componentDidLoad() {
    slowScroll($)
  }

  fixednav() {
    if (!this.fixed) {
      const header = document.querySelector('rfs-float-header')
      const headerClassList = header.classList

      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
          if (!headerClassList.contains('collapse')) {
            headerClassList.add('collapse')
          }
        } else if (headerClassList.contains('collapse')) {
          headerClassList.remove('collapse')
        }
      })
    }
  }


  render() {
    this.fixednav()
    return (
      <Host id={this.styleId }>
        <nav class="navbar fixed-top navbar-expand-sm ">
          <ul class="navbar-nav row">
            <slot></slot>
          </ul>
        </nav>
      </Host>
    )
  }
}
