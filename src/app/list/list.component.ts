import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BikeServiceService } from '../bike-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  // @Input() bikes:string[]=[];

    bikes:string[]=[];
    constructor(private bikeService:BikeServiceService){}

    ngOnInit(): void {
      this.bikeService.bikeName$.subscribe((name)=>{
        console.log(name);
        this.bikes=name;
      })
    }


}
