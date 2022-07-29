import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  users:Array<UserData>=new Array<UserData>();
  ngOnInit(): void {

    this._auth.getUsers().subscribe(res=>this.users=res,err=>console.log(err))
  }

}