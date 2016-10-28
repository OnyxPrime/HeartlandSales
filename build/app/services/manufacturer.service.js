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
var ManufacturerService = (function () {
    function ManufacturerService() {
        this.manufacturers = [{
                id: 1,
                cssClassName: 'americanStandard',
                name: 'American Standard',
                statesRepresented: 'OK',
                blurb: 'For over 140 years, American Standard has led the way in developing innovative bathroom and kitchen products including high performance toilets, stylish faucets, and wellness products that have set and re-set the standards for living healthy, living responsibly, and living beautifully.',
                image: 'AmericanStandardLogoLight.png',
                url: 'http://www.americanstandard-us.com/'
            }, {
                id: 2,
                cssClassName: 'blackswan',
                name: 'Black Swan',
                statesRepresented: 'OK | KS | Western MO | AR',
                blurb: 'Black Swan Mfg. Co. is one of the world’s leading manufacturers and distributors of plumbing chemicals and accessories. Our major manufactured products include plumbers putty, pipe joint compounds, hand cleaners, wax gaskets for setting toilet bowls, pipe lubricants, cutting oils, solvent cements and primers for plastic pipe, drain pipe openers, and much more. Our major products that we distribute are PTFE Tape, sand cloth, open mesh cloth, metal cement cans, brushes, closet bolts, water meter keys and no-hub couplings.',
                image: 'BlackSwanLogoLight.png',
                url: 'http://www.blackswanmfg.com/'
            }, {
                id: 3,
                cssClassName: 'goss',
                name: 'Goss',
                statesRepresented: 'OK | KS | MO | AR',
                blurb: 'Goss offers a wide variety of torches and accessories to fit any contractors need.  Our high quality Oxy-Fuel, Air-Acetylene, Air-Propane, Air-Propylene ( MAP-Pro™) and Nitrogen equipment is individually tested and engineered for performance.  We also provide high quality replacement cutting, welding, and heating tips for popular torches.',
                image: 'GossLogo.png',
                url: 'http://www.gossonline.com/'
            },
            //            {id: 4, cssClassName: 'safetyTubs', name:'Safety Tubs', statesRepresented:'OK', blurb:'Safety Tubs® designs and manufactures award winning acrylic and gelcoat walk in bathtubs. Our revolutionary walk in tubs are the premium bathtub for a safer, healthier and more comfortable bathing experience.', image: 'SafetyTubsLogo.png' },
            {
                id: 5,
                cssClassName: 'vpcGlobal',
                name: 'VPC Global',
                statesRepresented: 'KS | MO',
                blurb: 'Quality products that meet the industrial, commercial and residential demands of the construction industry with engineering innovation',
                image: 'VpcGlobalLogo.png',
                url: 'http://vpcglobal.com/'
            }, {
                id: 6,
                cssClassName: 'superGreen',
                name: 'Super Green',
                statesRepresented: 'OK | KS | MO | AR',
                blurb: 'SuperGreen Inc. was founded in 2008 by Henry Mai, who established many small businesses with a great mind for innovation and ingenuity. After a few bad experiences with residential hot water heater designs, Henry Mai quickly understood the need to find a better solution for consumers and aimed to resolve the challenges these products face today. His solution was a revolutionary infrared tankless water heater.',
                image: 'SuperGreenLogo.png',
                url: 'https://www.supergreenusa.com/'
            }, {
                id: 7,
                cssClassName: 'yanex',
                name: 'Yanex',
                statesRepresented: 'OK | KS | MO | AR',
                blurb: 'One of the largest secrets of the heating industry is the aluminum bi-metal radiators. This compound of aluminum and steel has the low thermal inertia needed to transfer heat efficiently, exceeding that of copper, bronze, and steel.',
                image: 'YanexLogo.png',
                url: 'http://yanexindustries.com/'
            }];
        this.images = [
            //{ title: 'American Standard Faucet', url: '/app/content/mfgimages/AS1.jpg' },
            //{ title: 'American Standard Faucet', url: '/app/content/mfgimages/AS2.jpg' },
            //{ title: 'American Standard Toilet', url: '/app/content/mfgimages/AS3.jpg' },
            //{ title: 'American Standard Sink', url: '/app/content/mfgImages/AS5.jpg' },
            //{ title: 'Goss', url: '/app/content/mfgimages/G1.jpg' },
            //{ title: 'Goss', url: '/app/content/mfgimages/G2.jpg' },
            //{ title: 'Goss', url: '/app/content/mfgimages/G3.jpg' },
            //{ title: 'Goss', url: '/app/content/mfgimages/G4.jpg' },
            //{ title: 'Super Green', url: '/app/content/mfgimages/SG1.png' },
            //{ title: 'Super Green', url: '/app/content/mfgimages/SG2.jpg' },
            //{ title: 'VPC', url: '/app/content/mfgimages/VPC1.jpg' },
            //{ title: 'VPC', url: '/app/content/mfgimages/VPC2.jpg' }
            { title: 'American Standard Faucet', url: './app/content/AmericanStandardDark.svg' },
            { title: 'Black Swan', url: './app/content/BlackSwanDark.svg' },
            { title: 'Goss', url: './app/content/GossDark.svg' },
            { title: 'VPC', url: './app/content/VpcGlobalDark.svg' },
            { title: 'SuperGreen, Inc.', url: './app/content/SuperGreenDark.svg' },
            { title: 'Yanex Industries', url: './app/content/YanexIndustriesDark.svg' },
        ];
    }
    ManufacturerService.prototype.getManufacturers = function () {
        return Promise.resolve(this.manufacturers);
    };
    ManufacturerService.prototype.getManufacturer = function (id) {
        return Promise.resolve(this.manufacturers).then(function (ms) { return ms.find(function (m) { return m.id === +id; }); });
    };
    ManufacturerService.prototype.getManufacturerImages = function () {
        return Promise.resolve(this.images);
        //return new Promise(resolve => { resolve([]); });
    };
    return ManufacturerService;
}());
ManufacturerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ManufacturerService);
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map