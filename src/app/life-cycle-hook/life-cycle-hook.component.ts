import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-hook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent implements OnChanges{

  @Input() colors:any[]=[];


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['colors']){      
      console.log("color property was changed",changes['colors'])
    }
  } 

}
