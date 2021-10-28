import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service' //Importo la clase WeatherService de esta direccion
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]
})
export class AppComponent implements OnInit{
  title = 'weather';

  public ciudad:string;
  public code:string;
  public weather:any;
  public currentLat:any;
  public currentLong:any;
  public weatherLocation:any;

  constructor(private _weatherService:WeatherService) {
    this.ciudad='';
    this.code='';

  }

  ngOnInit():void{
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 500
    });
    this.getPosition(); //Ejecutamos la funcion onLoad
  }

  submitLocation(form:any){
    this._weatherService.getWeather(this.ciudad,this.code).subscribe(
      response=>{
        this.weather=response;
        console.log(response);
        form.reset();
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  getPosition(){
    navigator.geolocation.getCurrentPosition(position=>{
      this.currentLat=position.coords.latitude;
      this.currentLong=position.coords.longitude;
      this._weatherService.coordinates(this.currentLat,this.currentLong).subscribe(
        response=>{
          this.weatherLocation=response;
          console.log(response);
        },
        error=>{
          console.log(<any>error);
        });


      console.log(position)
    });

  }

}
