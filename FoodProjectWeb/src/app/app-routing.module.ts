import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CartComponent} from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdateComponent } from './update/update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AddfoodadminComponent } from './addfoodadmin/addfoodadmin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MyorderdetailsComponent } from './myorderdetails/myorderdetails.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'addfood',
    component: AddfoodComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path:'finalorder',
    component:FinalorderComponent
  },
  {
    path: 'adashboard',
    component: AdashboardComponent
  },
  {
    path: 'orderdetails',
    component: OrderdetailsComponent
  },
  {
    path: 'addfoodadmin',
    component: AddfoodadminComponent
  },
  {
    path: 'user-details',
    component:UserDetailsComponent

  },
  {
    path: 'myorder',
    component:MyorderComponent

  },
  {
    path: 'myorderdetails',
    component:MyorderdetailsComponent

  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
