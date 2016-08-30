import { Component, Input } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';


@Component({
    selector: 'manufacturer-card',
    styleUrls:  ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/styles/manufacturer-card.component.css'],
    template:`
    <div class="module hero">
        <div class="item">
            <div class="col-xs-12 col-sm-2 ">           
               <div class="row mfgRow">
                    <div class="row ">
                        <div class="{{manufacturer.cssClassName}} mfgImage"></div>
                    </div>
                    <div class="row">   
                        <p class="stateRep">{{manufacturer.statesRepresented}}</p>
                    </div>
               </div>
            </div>
            <div class="hidden-xs col-sm-10 vertical-align content mfgCol ">
                <div class="mfgBorder">
                </div>
                <div class="mfgBlurb">{{manufacturer.blurb}}</div>
            </div>
        </div>
    </div>
    `
})
export class ManufacturerCardComponent {
    @Input() 
    manufacturer: Manufacturer;
}