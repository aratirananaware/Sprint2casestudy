import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService : CartService,private jwt: JwtHelperService, public httpc: HttpClient, private _foodservice: ProductService, private _router: Router, private _auth: AuthService) { }
  username: string = '';
  FoodItemIds=[];
  grandtotal=0.0;
  ngOnInit(): void {
    this.username = this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    this.FoodItemIds=this.cartService.getFooItemIds();
  }

  addfood: order = new order();
  addfoods: Array<order> = new Array<order>();

  AddFood() {
    var route = this._router;
    var addo = {
      firstName: this.addfood.firstName,
      lastName: this.addfood.lastName,
      Email: this.addfood.email,
      PhoneNo: this.addfood.phoneNo,
      Address: this.addfood.address,
      paymentmode: this.addfood.paymentmode,
      username: this.username,
      foodItemIds:this.FoodItemIds
    }

    this.httpc.post("https://localhost:44366/api/Order", addo).subscribe(res => { route.navigate(['/finalorder']); }, res => console.log(res));
    this.cartService.removeAllCart();
    this.addfood = new order();
  }
  Show() {
    console.log("Hi");
    this.httpc.get("https://localhost:44366/api/Order").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addfoods = input;
  }
  GetError(input: any) {
    console.log(input);
  }
}