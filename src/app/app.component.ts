import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-comp';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    console.log('Lazy100')
    const { Lazy1Component } = await import('../app/components/lazy1/lazy1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    console.log('Lazy200')
    const { Lazy2Component } = await import('../app/components/lazy2/lazy2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}
