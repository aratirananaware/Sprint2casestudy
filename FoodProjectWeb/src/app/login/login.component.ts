import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  LoginUser() {
    var userDataObject = {
      userName: this.loginUserData.userName,
      password: this.loginUserData.password
    }
    this._auth.loginUser(userDataObject).subscribe(res => {
      localStorage.setItem('token', res.token);
      if (res.isAdmin)
        this._router.navigate(['/adashboard']);
      else if (res.isRestaurant)
        this._router.navigate(['/dashboard']);
      else
        this._router.navigate(['/home']);
    }, err => console.log(err));
  }

  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.loginUserData.formLoginGroup.controls[controlname].hasError(typeofvalidator);
  }
}