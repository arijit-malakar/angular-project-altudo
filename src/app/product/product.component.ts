import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as productData from '../user.json'
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products :any;
  @Output() productDetail: EventEmitter<any> = new EventEmitter<any>;

  constructor(private _commonService: CommonService){
    console.log(this.products)
  }
  ngOnInit(){
    this.getAllProducts();
  }
  passData(id:any){
    this.productDetail.emit(id);
  }
  
  getAllProducts(){
    this._commonService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.products= data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
