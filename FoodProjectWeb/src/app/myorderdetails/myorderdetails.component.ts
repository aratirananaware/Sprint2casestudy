import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-myorderdetails',
  templateUrl: './myorderdetails.component.html'
})
export class MyorderdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _productService:ProductService) { }
  orderId:any='';
  myordersDetailsModels:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => { 
      this.orderId=params;
    });
    this._productService.getMyOrdersDetails(this.orderId.orderid).subscribe(res=>{this.myordersDetailsModels=res;});
   // this.orderId.orderid
  }

  CancelOrder(input:any){
    var index=this.myordersDetailsModels.indexOf(input);
    this.myordersDetailsModels.splice(index,1);
  }
}
