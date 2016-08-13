import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './Home/home.component';
import { ManufacturerDetailComponent } from  './Manufacturer/manufacturer-detail.component';
import { ManufacturerCardComponent } from './Home/manufacturer-card.component'
import { ManufacturerCardTextComponent } from './Home/manufacturer-card-text.component'

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ManufacturerDetailComponent, ManufacturerCardComponent, ManufacturerCardTextComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }