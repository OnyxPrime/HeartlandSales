// import { bootstrap }          from '@angular/platform-browser-dynamic';
// import { AppComponent }       from './app.component';
// import { appRouterProviders } from './app.routes';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// bootstrap(AppComponent, [
//   appRouterProviders
// ])
// .catch(err => console.error(err));


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);