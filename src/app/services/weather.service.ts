import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public apiKey:string;

  constructor( private _Htttp:HttpClient){
    this.apiKey='ff2d53493f9ed1db8d882ce2559ea553';
  }

  getWeather(cityName:string, codeCountry:string): Observable<any>{
    let headers=new HttpHeaders().set('Content-Type', 'application/json');
    return this._Htttp.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +','+ codeCountry +'&appid='+ this.apiKey +'&units=metric');
  }


  coordinates(latitude:number,longitude:number):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type', 'application/json');
    return this._Htttp.get('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+this.apiKey + '&units=metric');
  }


}
