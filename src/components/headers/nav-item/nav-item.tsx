import { Component, Prop, h } from '@stencil/core';
import $ from 'jquery';

@Component({
  tag: 'rfs-nav-item',
  styleUrl: 'nav-item.scss',
})
export class NavItemComponent {
  @Prop() active: boolean = false;
  @Prop() action: boolean = false;
  @Prop() target: string = null;
  @Prop() styleId: string;
  @Prop() color: string = "white";
  @Prop() actionButtonColor: string = "white";
  @Prop() effectColor: string = "#f8224";

  handleItem(event: Event) {
    $('rfs-nav-item .nav-item a').removeClass('active');
    $(event.target).parents('.nav-item a').addClass('active');
    
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
    element.css('--primary-color', this.color)
    element.css('--secondary-color', this.actionButtonColor)
    element.css('--tertiary-color', this.effectColor)

  }

  render() {
    return (
      <li class={this.getClasses()} id={this.styleId}>
        <a onClick={this.handleItem} class="nav-link" href={this.getHref()} target={this.getTarget()}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
