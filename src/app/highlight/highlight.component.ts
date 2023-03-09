import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnChanges {
  @Input() searchString : any;
  @Input() searchValue : any;
  result:any = []
  ngOnChanges(changes: SimpleChanges): void {
    let regEx = new RegExp('('+this.searchString+')');
    this.result = this.searchValue.split(regEx);
  }
}
