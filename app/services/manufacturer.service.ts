import { Injectable } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';

@Injectable()
export class ManufacturerService{
    private manufacturers: Manufacturer[] = [
            {id: 1, cssClassName: 'americanStandard', name:'American Standard', statesRepresented: 'OK | KS | MO | AR' },
            {id: 2, cssClassName: '', name:'Black Swan', statesRepresented:'OK | KS | Western MO | AR'},
            {id: 3, cssClassName: 'goss', name:'Goss', statesRepresented:'OK | KS | MO | AR'},
            {id: 4, cssClassName: 'safetyTubs', name:'Safety Tubs', statesRepresented:'OK'},
            {id: 5, cssClassName: '', name:'VPC Global', statesRepresented:'KS | MO'},
            {id: 6, cssClassName: '', name:'Super Green', statesRepresented:'OK | KS | MO | AR'},
            {id: 7, cssClassName: '', name:'Yanex', statesRepresented:'OK | KS | MO | AR'},
        ];
        
    getManufacturers() {       
        return Promise.resolve(this.manufacturers);
    }

    getManufacturer(id: number){
        return Promise.resolve(this.manufacturers).then(ms=>ms.find(m => m.id === +id));
    }
}