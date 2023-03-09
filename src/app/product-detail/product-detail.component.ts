import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
 // @Input() id: any;
  id: any;
  @Output() backProductListPage: EventEmitter<null> = new EventEmitter<null>();
  productDetail: any;

  constructor(private _commonService: CommonService, private _activeRoute:ActivatedRoute, private _navigate:Router) {
   this.id = this._activeRoute.snapshot.paramMap.get('id');
  }

  backProductList() {
    this._navigate.navigate(['/products'])
  }

  ngOnInit(): void {
    this.getSingleProductDetail();
  }

  getSingleProductDetail() {
    this._commonService.getSingleProducts(this.id).subscribe({
      next: (data) => {
        this.productDetail = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editSingleProductDetail() {
    let obj = this.productDetail;
    obj.title = "Demo Item",

    this._commonService.editSingleProducts(this.id, obj).subscribe({
      next: (updateData) => {
        this.productDetail = updateData;
        console.log(updateData)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
