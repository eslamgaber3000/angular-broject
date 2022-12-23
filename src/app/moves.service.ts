import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor( private _HttpClient:HttpClient) { }

  getSimilarMoveis(id:string ,media_type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=&language=en-US&page=1`)
  }
  getItemDetails(id:string ,media_type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=&language=en-US`)
  }
  getTrinding(medeiType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${medeiType}/day?api_key=`)
  }
}
