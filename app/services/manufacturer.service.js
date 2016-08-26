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
var ManufacturerService = (function () {
    function ManufacturerService() {
        this.manufacturers = [
            { id: 1, cssClassName: 'americanStandard', name: 'American Standard', statesRepresented: 'OK | KS | MO | AR' },
            { id: 2, cssClassName: '', name: 'Black Swan', statesRepresented: 'OK | KS | Western MO | AR' },
            { id: 3, cssClassName: 'goss', name: 'Goss', statesRepresented: 'OK | KS | MO | AR' },
            { id: 4, cssClassName: 'safetyTubs', name: 'Safety Tubs', statesRepresented: 'OK' },
            { id: 5, cssClassName: '', name: 'VPC Global', statesRepresented: 'KS | MO' },
            { id: 6, cssClassName: '', name: 'Super Green', statesRepresented: 'OK | KS | MO | AR' },
            { id: 7, cssClassName: '', name: 'Yanex', statesRepresented: 'OK | KS | MO | AR' },
        ];
    }
    ManufacturerService.prototype.getManufacturers = function () {
        return Promise.resolve(this.manufacturers);
    };
    ManufacturerService.prototype.getManufacturer = function (id) {
        return Promise.resolve(this.manufacturers).then(function (ms) { return ms.find(function (m) { return m.id === +id; }); });
    };
    ManufacturerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ManufacturerService);
    return ManufacturerService;
}());
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map