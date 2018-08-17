import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a href="https://google.com">Google</a>
    <a href="https://bing.com">Bing</a>
    <a href="https://forbes.com">Forbes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      a {
        margin-right: 16px;
      }
    `
  ]
})
export class AppComponent {}
