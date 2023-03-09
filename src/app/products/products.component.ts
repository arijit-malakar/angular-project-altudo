import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import * as ProductData from '../user.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //products = ProductData;
  products:any;
  @Output() productDetail:EventEmitter<any> = new EventEmitter<any>();

  constructor(private _commonService: CommonService){
    console.log("products data", this.products)
  }
  passData(id:any){
    this.productDetail.emit(id);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._commonService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.products = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }


}
