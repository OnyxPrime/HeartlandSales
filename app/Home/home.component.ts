import { Component } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../models/Manufacturer';
import { Image } from '../models/image';

@Component({
  templateUrl: './app/views/home.html',
  styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/home.component.css'],  
  providers: [ManufacturerService],  
})
export class HomeComponent {
  
  manufacturers: Manufacturer[];
  mfgImages: Promise<Image[]>;

  constructor(manService: ManufacturerService, private router: Router){
    manService.getManufacturers().then(x=>this.manufacturers = x );
    //manService.getManufacturerImages().then(x=>this.mfgImages = x);
    this.mfgImages = manService.getManufacturerImages();
  }

  onSelect(manufacturer: Manufacturer){
    this.router.navigate(['/Manufacturer', manufacturer.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/