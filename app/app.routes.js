"use strict";
var router_1 = require('@angular/router');
var manufacturer_detail_component_1 = require('./Manufacturer/manufacturer-detail.component');
var home_component_1 = require('./Home/home.component');
var routes = [
    { path: 'Manufacturer/:id', component: manufacturer_detail_component_1.ManufacturerDetailComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: false });
//# sourceMappingURL=app.routes.js.map