import { style } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements AfterViewInit {

  @Input() userGroup: string;

  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }

  ngAfterViewInit(){
    if(this.userGroup !=="Admin"){
    this.renderer.setStyle(this.eleRef.nativeElement,"display","none");
  }
}
}
