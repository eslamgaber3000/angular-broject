import { Component, OnInit } from '@angular/core';
import{FormControl ,FormGroup,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthinticationService } from '../authintication.service';
  


@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  constructor(private _AuthinticationService:AuthinticationService ,private _Router:Router) { 
    _AuthinticationService.signup
  }


  regesterForm:FormGroup=new FormGroup({
     first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
     last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    email:new FormControl(null,[Validators.email ,Validators.required]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][A-Za-z1-9]{4,}/)]),
   age:new FormControl(null,[Validators.min(18),Validators.max(80),Validators.required])
   })


   error:string='';
   isloading:boolean=false;

  regestratinForm(regesterForm:FormGroup)
  {
    this.isloading=true
   console.log(regesterForm.value);
   this._AuthinticationService.signup(regesterForm.value).subscribe({
    next:(response)=> {
      this.isloading=false;
      if (response.message==='success') {
        this._Router.navigate(['/login'])
      }else{
       this.error=response.message;
        
      }
    }
   })
   
  }
  

  ngOnInit(): void {
  }

}
