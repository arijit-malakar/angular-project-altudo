import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  @Input() color:any;

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.color = "blue";
   }

   @HostListener('mouseenter') onmouseenter(){
      this.ele.nativeElement.style.color = "yellow";
   } 
   @HostListener('mouseleave') onmouseleave(){
    this.ele.nativeElement.style.color = "green";
 } 

}
