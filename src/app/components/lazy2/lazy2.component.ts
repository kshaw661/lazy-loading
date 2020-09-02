import { Component, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Lazy2aComponent } from './lazy2a/lazy2a.component'
import { Lazy2bComponent } from './lazy2b/lazy2b.component';
@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const componentFactorya = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryb = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.viewContainerRef.createComponent(componentFactorya);
    this.viewContainerRef.createComponent(componentFactoryb);
  }

}
