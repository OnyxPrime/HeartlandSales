import { Component, Input } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';


@Component({
    selector: 'manufacturer-card',
    styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/manufacturer-card.component.css'],
    template:`
    <div class="module hero">
        <div class="item">
            <div class="content">
                <div class="{{manufacturer.cssClassName}} mfgImage"></div>
                <p class="stateRep">{{manufacturer.statesRepresented}}</p>
            </div>
        </div>
    </div>
    `
})
export class ManufacturerCardComponent {
    @Input() 
    manufacturer: Manufacturer;
}