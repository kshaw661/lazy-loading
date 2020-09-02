import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lazy1Component } from './components/lazy1/lazy1.component';
import { Lazy2Component } from './components/lazy2/lazy2.component';
import { Lazy2aComponent } from './components/lazy2/lazy2a/lazy2a.component';
import { Lazy2bComponent } from './components/lazy2/lazy2b/lazy2b.component';

@NgModule({
  declarations: [
    AppComponent,
    Lazy1Component,
    Lazy2Component,
    Lazy2aComponent,
    Lazy2bComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
