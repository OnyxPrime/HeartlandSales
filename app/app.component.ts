import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    selector: 'my-app',
    //templateUrl: 'home.html'
    template: `<nav class="hs_navbar">    
    <img src="./app/content/Hearland_Logo_200.png" height="50" (click)="OnSelect()" style="cursor: hand"/>
</nav>

<router-outlet></router-outlet>`   ,
  directives: [ROUTER_DIRECTIVES] 
})
export class AppComponent {
  constructor(
    private router: Router)
    {}    
  OnSelect(){
    this.router.navigate(['/']);
  }
 }