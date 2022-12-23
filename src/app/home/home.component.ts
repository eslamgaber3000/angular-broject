import { MovesService } from './../moves.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  term:string=''
trendingMoveis:any=[]
trendingtv:any=[]
trendingPoeble:any=[]
  constructor(private _MovesService:MovesService) { }

  ngOnInit(): void {
this._MovesService.getTrinding('movie').subscribe({
  next:(response)=>this.trendingMoveis=response.results.slice(0,10)
    
})
this._MovesService.getTrinding('tv').subscribe({
  next:(response)=>this.trendingtv=response.results.slice(0,10)
})
this._MovesService.getTrinding('person').subscribe({
  next:(response)=>this.trendingPoeble=response.results.filter((item:any)=>item.profile_path!=null).slice(0,10)
})

  }

}
