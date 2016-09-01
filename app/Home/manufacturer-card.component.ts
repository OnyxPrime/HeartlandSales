import { Component, Input } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';


@Component({
    templateUrl: './app/views/mfgCard.html',
    selector: 'manufacturer-card',
    styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/manufacturer-card.component.css'],
})
export class ManufacturerCardComponent {
    @Input() 
    manufacturer: Manufacturer;
}