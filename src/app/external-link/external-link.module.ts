import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExternalLinkDirective],
  exports: [ExternalLinkDirective]
})
export class ExternalLinkModule { }
