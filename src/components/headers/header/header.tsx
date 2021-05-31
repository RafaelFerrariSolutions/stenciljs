import { Component, Prop, Host, h } from '@stencil/core';
import $ from 'jquery';
import { uuid  } from '../../../utils/utils'

@Component({
  tag: 'rfs-header',
  styleUrl: 'header.scss',
  assetsDirs: ['media'],
})
export class Header {
  @Prop() styleId: string
  @Prop() smoothTop: boolean = false;
  @Prop() fixed: boolean = false;
  @Prop() sticky: boolean = false;
  @Prop() rtl: boolean = false;
  @Prop() logo: string = null;
  @Prop() bgColor: string = "rgba(6, 12, 34, 0.98)";

  toggleNavbar(ev: Event) {
    ev.preventDefault();

    let toggle = !$('rfs-header .collapse-shadow').is(":visible");

    if (toggle) {
      $('rfs-header .collapse-shadow').fadeIn();
      $('rfs-header .navbar-collapse').fadeIn().addClass('show');
    } else {
      $('rfs-header .collapse-shadow').fadeOut();
      $('rfs-header .navbar-collapse').removeClass('show').fadeOut();
    }
  }

  private smooth(): void {
    window.onscroll = function() {
      if ($(window).scrollTop() != 0) {
        $('rfs-header .navbar').removeClass('bg-transparent');
      } else {
        $('rfs-header .navbar').addClass('bg-transparent');
      }
    }
  }

  private getClasses(): string {
    let classes = [];
    classes.push('navbar navbar-expand-sm');
    

    if (this.smoothTop) {
      classes.push('bg-transparent')
      this.smooth();
    }

    if (this.fixed) {
      classes.push('fixed-top')
    }

    if (this.sticky) {
      classes.push('sticky-top')
    }


    if (this.rtl) {
      classes.push('rtl')
    }

    return classes.join(' ');
  }

  private getBrand() {
    if (!this.logo) {
      return 'Navbar';
    }

    return (
      <img src={this.logo} />
    )
  }
 
  componentWillLoad() {
    this.styleId = uuid()
    }

  componentDidLoad() {
    let element = $(`#${this.styleId}`)
    element.css('--background-color', this.bgColor)
  }

  render() {
    return (
      <Host id={this.styleId}>
        <nav class={this.getClasses()}>
          <div class="container">
            <a class="navbar-brand" href="#">
              {this.getBrand()}
            </a>
            <button onClick={this.toggleNavbar} class="navbar-toggler" type="button" >
              <span class="fa fa-bars"></span>
            </button>
            
            <div class="collapse-shadow" onClick={this.toggleNavbar}></div>

            <div class="collapse navbar-collapse" id="rfs-header">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <slot></slot>
              </ul>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
