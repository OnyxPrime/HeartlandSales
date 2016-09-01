import { Component, Input } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';


@Component({
    selector: 'manufacturer-card-text',
    styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/manufacturer-card.component.css'],
    templateUrl: './app/views/mfgCardText.html',    
})
export class ManufacturerCardTextComponent {
    @Input() 
    manufacturer: Manufacturer;
}