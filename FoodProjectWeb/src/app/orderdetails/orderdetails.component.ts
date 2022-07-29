import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-addfood',
  templateUrl: './orderdetails.component.html',
})
export class OrderdetailsComponent implements OnInit {

  constructor(public httpc: HttpClient, private _foodservice: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.Show();
  }

  addfood: order = new order();
  addfoods: Array<order> = new Array<order>();

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