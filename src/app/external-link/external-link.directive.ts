import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'a:not([routerLink])'
})
export class ExternalLinkDirective {
  @HostBinding('rel')
  @Input()
  rel = 'noopener';

  @HostBinding('target')
  @Input()
  target = '_blank';
}
