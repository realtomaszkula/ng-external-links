import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalLinkModule } from './external-link/external-link.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExternalLinkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
