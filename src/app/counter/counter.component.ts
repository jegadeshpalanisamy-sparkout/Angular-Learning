import { Component } from '@angular/core';
import { TwinkleDirective } from '../directive/twinkle.directive';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [TwinkleDirective],
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

}
