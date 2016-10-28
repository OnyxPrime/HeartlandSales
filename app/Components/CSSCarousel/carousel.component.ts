import {Component, Input, OnInit} from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'css-carousel',
  templateUrl:'app/components/csscarousel/carousel.html',
  styleUrls: ['app/components/csscarousel/carousel.css']
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
        this.slideWidth = (numberOfPanes * 25);
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