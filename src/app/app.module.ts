import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lazy1Component } from './components/lazy1/lazy1.component';
import { Lazy2Component } from './components/lazy2/lazy2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lazy1Component,
    Lazy2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
