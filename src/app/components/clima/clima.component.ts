import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  providers:[WeatherService]
})
export class ClimaComponent implements OnInit {

  ngOnInit(){
  }

}
