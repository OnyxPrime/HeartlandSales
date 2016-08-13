import { Component } from '@angular/core';
import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../models/Manufacturer'

@Component({
  templateUrl: './home.html',
  styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/home.component.css'],  
  providers: [ManufacturerService],  
})
export class HomeComponent {
  
  manufacturers: Manufacturer[];

  constructor(manService: ManufacturerService){
    manService.getManufacturers().then(x=>this.manufacturers = x );
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/