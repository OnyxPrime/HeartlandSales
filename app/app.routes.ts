import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent} from './not-found.component';
import { ManufacturerDetailComponent} from './Manufacturer/manufacturer-detail.component';
import { HomeComponent} from './Home/home.component';
import { ManufacturerCardComponent } from './Home/manufacturer-card.component'

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: 'Manufacturer/:id', component: ManufacturerDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
