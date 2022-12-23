import { Component, OnInit } from '@angular/core';
import { AuthinticationService } from '../authintication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
islogin:boolean=false;
  constructor(private _AuthinticationService:AuthinticationService) { }

  ngOnInit(): void {
   this._AuthinticationService.userData.subscribe({next:()=>{
    if ( this._AuthinticationService.userData.getValue !=null) {
      this.islogin=true
    }else{
      this.islogin=false
    }
   }
  });
   
  }
  signOut(){
    this._AuthinticationService.signout()
  }
}
