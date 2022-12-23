import { Component, OnInit } from '@angular/core';
import{FormControl ,FormGroup,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthinticationService } from '../authintication.service';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthinticationService:AuthinticationService ,private _Router:Router) { 
    _AuthinticationService.signup
  }


  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email ,Validators.required]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][A-Za-z1-9]{4,}/)]),
   
   })


   error:string='';
   isloading:boolean=false;

  supmitloginForm(loginForm:FormGroup)
  {
    this.isloading=true
   console.log(loginForm.value);
   this._AuthinticationService.signin(loginForm.value).subscribe({
    next:(response)=> {
      this.isloading=false;
      if (response.message==='success') {

        localStorage.setItem('userToken',response.token)
        this._AuthinticationService.saveData()
        this._Router.navigate(['/home'])
      }else{
       this.error=response.message;
        
      }
    }
   })
   
  }
  

  ngOnInit(): void {
    this._AuthinticationService.userData.subscribe({next:()=>{
     if ( this._AuthinticationService.userData.getValue !=null) {
       this._Router.navigate(['/home'])
     }else{
      
     }
    }
   });
    
   }

}
