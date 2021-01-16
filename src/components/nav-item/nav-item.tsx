import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery';

@Component({
  tag: 'rfs-nav-item',
  styleUrl: 'nav-item.scss',
})
export class NavItemComponent {
  /**
   * Define se o nav-item está ativo no momento
   */
  @Prop() active: boolean = false;

  /**
   * Define se é um botão de ação. 
   */
  @Prop() action: boolean = false;

  /**
   * Define a âncora do botão.
   */
  @Prop() target: string = null;

  handleItem(event: Event) {
    $('rfs-nav-item .nav-item').removeClass('active');
    $(event.target).parents('.nav-item').addClass('active');
    
    if (window.innerWidth <= 720) {
      $("rfs-header .navbar .collapse-shadow").trigger("click");
    }
  }

  private getClasses(): string {
    let classes = [];
    classes.push('nav-item');

    if (this.active) {
      classes.push('active');
    }

    if (this.action) {
      classes.push('action');
    }

    return classes.join(' ');
  }

  private getHref(): string {
    if (!this.target) {
      return '#';
    }

    if (this.isUrl()) {
      new URL(this.target);

      return this.target;
    } else {
      return '#' + this.target;  
    }
  }

  private getTarget(): string {
    if (this.isUrl()) {
      return '_blank';
    } else {
      return '_self';
    }
  }

  private isUrl(): boolean {
    try {
      new URL(this.target);

      return true;
    } catch (_) {
      return false;  
    }
  }

  render() {
    return (
      <li class={this.getClasses()}>
        <a onClick={this.handleItem} class="nav-link" href={this.getHref()} target={this.getTarget()}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
