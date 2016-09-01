import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../models/Manufacturer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './app/views/mfgDetail.html',
  providers: [ManufacturerService]  
})
export class ManufacturerDetailComponent {
  
  manufacturer: Manufacturer = new Manufacturer();
  private sub: Subscription;
  constructor(
    private service: ManufacturerService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getManufacturer(id).then(m=> this.manufacturer = m);
    });     
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/