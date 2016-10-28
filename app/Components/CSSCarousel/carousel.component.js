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
var core_1 = require("@angular/core");
var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        this.slideWidth = 0;
        this.slideElementWidth = 0;
        this.keyframes = [];
    }
    CSSCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.images);
        this.images.then(function (data) {
            var numberOfPanes = data.length;
            _this.slideWidth = (numberOfPanes * 25);
            _this.slideElementWidth = (100 / numberOfPanes);
            console.log(_this.slideWidth);
        });
    };
    CSSCarouselComponent.prototype.CreateKeyFrames = function (nop) {
        var iterations = nop * 2;
        var increment = 100 / iterations;
        for (var _i = 0; _i < nop; _i++) {
            this.keyframes.push();
        }
    };
    ;
    return CSSCarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Promise)
], CSSCarouselComponent.prototype, "images", void 0);
CSSCarouselComponent = __decorate([
    core_1.Component({
        selector: 'css-carousel',
        templateUrl: 'app/components/csscarousel/carousel.html',
        styleUrls: ['app/components/csscarousel/carousel.css']
    }),
    __metadata("design:paramtypes", [])
], CSSCarouselComponent);
exports.CSSCarouselComponent = CSSCarouselComponent;
//# sourceMappingURL=carousel.component.js.map