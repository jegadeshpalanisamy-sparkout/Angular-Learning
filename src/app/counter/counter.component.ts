import { Component } from '@angular/core';
import { TwinkleDirective } from '../directive/twinkle.directive';
import { AppHighlightDirective } from '../directive/app-highlight.directive';
import { UnlessDirective } from '../directive/unless.directive';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [TwinkleDirective,AppHighlightDirective,UnlessDirective],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count =0;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
    if (this.count==-1) {
      this.count=0;
    }
    
  }

  hasView=false;

}
