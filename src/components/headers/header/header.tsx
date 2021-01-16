import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery';

@Component({
  tag: 'rfs-header',
  styleUrl: 'header.scss',
  assetsDirs: ['media'],
})
export class HeaderComponent {
  /**
   * Define se a navbar será escura. Caso falso = claro.
   */
  @Prop() dark: boolean = false;

  /**
   * Define se a navbar será transparente no topo da página.
   */
  @Prop() smoothTop: boolean = false;

  /**
   * Define se será fixa no topo sem ocupar espaço (Ao usar scroll de tela)
   */
  @Prop() fixed: boolean = false;

  /**
   * Define se será fixa no topo ocupando espaço (Ao usar scroll de tela)
   */
  @Prop() sticky: boolean = false;

  /**
   * Referente menu do mobile. Caso falso, menu virá da esquerda para a direita. 
   */
  @Prop() rtl: boolean = false;

  /**
   * Path (caminho) da logo
   */
  @Prop() logo: string = null;

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
    classes.push('navbar navbar-expand-lg');
    
    if (this.dark) {
      classes.push('navbar-dark')
    }

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

  render() {
    return (
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
    );
  }
}
