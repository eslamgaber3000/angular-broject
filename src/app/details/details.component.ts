import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovesService } from '../moves.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item:any;
  similarDetails:any=[]
  
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MovesService:MovesService) { }
  mediatype:string=''
  ngOnInit(): void {
    let {id,media_type} =this._ActivatedRoute.snapshot.params
    this.mediatype=media_type
    console.log(id)
    console.log(media_type)

    this._MovesService.getItemDetails(id,media_type).subscribe({
      next:(response)=>this.item=response
    })
    this._MovesService.getSimilarMoveis(id,media_type).subscribe({
      next:(response)=>this.similarDetails=response.results .slice(0,6) })
  }
getSimilar (id:string,media_type:string){

  this._MovesService.getItemDetails(id,media_type).subscribe({
    next:(response)=>this.item=response
  })
  
 this._MovesService.getSimilarMoveis(id,media_type).subscribe({
      next:(response)=>this.similarDetails=response.results .slice(0,6)   })
}
}
