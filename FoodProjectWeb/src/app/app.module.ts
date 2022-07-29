import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
//import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import {CartComponent} from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './Shared/filter.pipe';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdateComponent } from './update/update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AddfoodadminComponent } from './addfoodadmin/addfoodadmin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MyorderComponent } from './myorder/myorder.component';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { MyorderdetailsComponent } from './myorderdetails/myorderdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    CartComponent,
    SearchComponent,
    AddfoodComponent,
    FilterPipe,
    UpdateComponent,
    CheckoutComponent,
    FinalorderComponent,
    AdashboardComponent,
    OrderdetailsComponent,
    AddfoodadminComponent,
    UserDetailsComponent,
    MyorderComponent,
    MyorderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
 
  providers: [AuthService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
