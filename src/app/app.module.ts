import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ClimaComponent } from './components/clima/clima.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
