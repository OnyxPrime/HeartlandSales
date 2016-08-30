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
var manufacturer_1 = require('../models/manufacturer');
var ManufacturerCardComponent = (function () {
    function ManufacturerCardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', manufacturer_1.Manufacturer)
    ], ManufacturerCardComponent.prototype, "manufacturer", void 0);
    ManufacturerCardComponent = __decorate([
        core_1.Component({
            selector: 'manufacturer-card',
            styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/manufacturer-card.component.css'],
            template: "\n    <div class=\"module hero\">\n        <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-2 \">           \n               <div class=\"row mfgRow\">\n                    <div class=\"row \">\n                        <div class=\"{{manufacturer.cssClassName}} mfgImage\"></div>\n                    </div>\n                    <div class=\"row\">   \n                        <p class=\"stateRep\">{{manufacturer.statesRepresented}}</p>\n                    </div>\n               </div>\n            </div>\n            <div class=\"hidden-xs col-sm-10 vertical-align content mfgCol \">\n                <div class=\"mfgBorder\">\n                </div>\n                <div class=\"mfgBlurb\">{{manufacturer.blurb}}</div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ManufacturerCardComponent);
    return ManufacturerCardComponent;
}());
exports.ManufacturerCardComponent = ManufacturerCardComponent;
//# sourceMappingURL=manufacturer-card.component.js.map