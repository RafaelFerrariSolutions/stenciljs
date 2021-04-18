import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rfs-float-header',
  styleUrl: 'float-header.scss',
})
export class FloatHeaderComponent {
  @Prop() fixed: boolean = false;

  fixednav() {
    if (this.fixed == false) {
      const header = document.querySelector('#header')
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
      <nav class="navbar fixed-top navbar-expand-sm ">
        <ul class="navbar-nav row">
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
