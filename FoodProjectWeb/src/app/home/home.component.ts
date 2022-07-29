import { Component, OnInit } from '@angular/core';
import { Food } from '../models/Food';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { foodadmin } from '../models/foodadmin';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey:string ="";
  constructor(private _productservice: ProductService,private _router:Router,private _cartservice:CartService,private _auth:AuthService) { }
 
  products: Array<foodadmin> = new Array<foodadmin>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => {this.products = res;
      this.products.forEach((a :any) =>{
        Object.assign(a,{quantity:1});
      });
    })
    this._cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  
    buy(item: any){
      this._cartservice.addtoCart(item);
    //this._router.navigate(['/cart']);
  }
  LoggedIn(input:boolean)
  {
    if(input)
    {
return this._auth.loggedIn();
    }
    else
    {
      return !this._auth.loggedIn();
    }
    }
  }
  
