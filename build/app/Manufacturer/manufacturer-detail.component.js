"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var manufacturer_service_1 = require('../services/manufacturer.service');
var Manufacturer_1 = require('../models/Manufacturer');
var ManufacturerDetailComponent = (function () {
    function ManufacturerDetailComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.manufacturer = new Manufacturer_1.Manufacturer();
    }
    ManufacturerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.service.getManufacturer(id).then(function (m) { return _this.manufacturer = m; });
        });
    };
    ManufacturerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ManufacturerDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <h2 *ngIf=\"!manufacturer.cssClassName\" >Manufacturer {{manufacturer.name}}</h2>\n    <div *ngIf=\"manufacturer.cssClassName\">\n      <br />\n      <img src=\"app/content/{{manufacturer.image}}\" />\n      <br /><br />\n    </div>\n    <div>{{manufacturer.blurb}}</div>\n    ",
            providers: [manufacturer_service_1.ManufacturerService]
        }), 
        __metadata('design:paramtypes', [manufacturer_service_1.ManufacturerService, router_1.Router, router_1.ActivatedRoute])
    ], ManufacturerDetailComponent);
    return ManufacturerDetailComponent;
}());
exports.ManufacturerDetailComponent = ManufacturerDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=manufacturer-detail.component.js.map