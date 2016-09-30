import {Component, Input, OnInit} from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'css-carousel',
  //templateUrl:'app/components/csscarousel/carousel.html',
  styleUrls: ['app/components/csscarousel/carousel.css'],
  template: `
  <style>
  .slides{
      list-style:none;
      position:relative;
      /*width: {{slideWidth}}%;  Number of panes * 100% */
      overflow:hidden; /* Clear floats */
          /* Slide effect Animations*/
      -moz-animation:carousel 30s infinite;
      -webkit-animation:carousel 30s infinite;
      animation:carousel 30s infinite;
  }
  .slides > li{
      position:relative;
      float:left;
      /* width: 8.33%; 100 / number of panes */
  }
  </style>
   <div class="carousel">
     <ul class="slides" [ngStyle]="{'width': slideWidth+'%'}">
       <li *ngFor="let image of images | async" [ngStyle]="{width: slideElementWidth+'%'}">
         <h2>{{image.title}}</h2>
         <img src="{{image.url}}" alt="">
       </li>
     </ul>
   </div>
  `
})
export class CSSCarouselComponent {
    @Input() 
    images: Promise<Image[]>;
    slideWidth: number = 0;
    slideElementWidth: number = 0;
    keyframes: Array<any> = [];
    ngOnInit(){
      console.log(this.images);
      this.images.then(data =>{
        let numberOfPanes = data.length;
        this.slideWidth = (numberOfPanes * 50);
        this.slideElementWidth = (100 / numberOfPanes);
        console.log(this.slideWidth);
      });
    }

    
      
      CreateKeyFrames(nop:number){
        let iterations: number = nop * 2;
        let increment: number = 100 / iterations;
        for (var _i = 0; _i < nop; _i++) {
          this.keyframes.push()
        }
      };
}