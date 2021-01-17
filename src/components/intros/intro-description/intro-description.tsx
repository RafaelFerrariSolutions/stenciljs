import { Component, h } from '@stencil/core';

@Component({
  tag: 'rfs-intro-description',
  styleUrl: 'intro-description.scss',
})
export class IntroDescriptionComponent {
  render() {
    return (
      <p><slot></slot></p>
    );
  }

}
