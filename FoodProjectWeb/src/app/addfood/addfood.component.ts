import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/Food';
import { ProductService } from '../services/product.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  username:string='';
  constructor(private _auth:AuthService,private jwt:JwtHelperService,public httpc: HttpClient, private _foodservice: ProductService, private _router: Router) { }
  files = [];
  isEdit=false;
  ngOnInit(): void {
    this.username=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    this.Show();
  }

  addfood: Food = new Food();
  addfoods: Array<Food> = new Array<Food>();
img:any;
  AddFood() {
    console.log(this.addfood)

    var addo = {
      
      foodName: this.addfood.foodName,
      place:this.addfood.place,
      restaurantName:this.addfood.restaurantName,
      foodDescription:this.addfood.foodDescription,
      foodFinal: Number(this.addfood.foodFinal),
      foodMrp: Number(this.addfood.foodMrp),
      foodDiscount: Number(this.addfood.foodDiscount),
      foodImage: this.addfood.foodImage,
      isActive: Number(this.addfood.isActive),
      restaurantUserName:this.username
    }

    if(this.isEdit)
    {
      this.httpc.put("https://localhost:44366/api/Food", Food).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
    }
    else
{
    let filetoUpload=<File>this.files[0];
    const formData=new FormData();
    formData.append('file',filetoUpload,filetoUpload.name)
    this.httpc.post("https://localhost:44366/api/Upload",formData).subscribe(res=>{console.log(res); this.img=res;addo.foodImage=this.img.imageUrl;this.AddFoodss(addo);},res=>console.log(res));
}

    this.addfood = new Food();
  }
  AddFoodss(addo:any)
  {
    this.httpc.post("https://localhost:44366/api/Food", addo).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
  }
  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  PostSuccess(res: any) {
    this.Show();
    alert("Product Added succesfully");
    console.log(res);

  }
  PostError(res: any) {
    console.log(res);
  }

  Show() {
    console.log("Hi");
    this.httpc.get("https://localhost:44366/api/Food").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addfoods = input;
  }
  GetError(input: any) {
    console.log(input);
  }


}