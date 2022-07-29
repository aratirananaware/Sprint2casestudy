
import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';

export class RegisterUserData{
    UserID:number=0;
    userName:string='';
    isRestaurant:number=0;
    password:string='';
    RestaurantName:string='';
    

    formRegisterGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formRegisterGroup=_builder.group({});
        this.formRegisterGroup.addControl("UserNameControl",new FormControl('',Validators.required));
        this.formRegisterGroup.addControl("PasswordControl",new FormControl('',Validators.required));
    }
}