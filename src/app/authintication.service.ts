import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthinticationService {
  
  userData:any=new BehaviorSubject(null)
  saveData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken')) 
    let decodeToken:object=jwtDecode(encodedToken)
    this.userData.next(decodeToken)
    console.log(this.userData)
  }
signout(){
  localStorage.removeItem('userToken')
  this.userData.next(null)
  this._Router.navigate(['/login'])
}
  constructor(private _HttpClient:HttpClient ,private _Router:Router) 
  {
   if (localStorage.getItem('userToken')!=null){
    this.saveData()
   }
   }
   signup(userData:object):Observable<any>
   {
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup',userData)
  }
   signin(userData:object):Observable<any>
   {
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signin',userData)
  }

}
