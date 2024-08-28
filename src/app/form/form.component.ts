import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BikeServiceService } from '../bike-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  bikeName:string='';
  constructor(private bikeservice:BikeServiceService ){}

  //sending that value to outsideof the component 
  // @Output() bikeAdded=new EventEmitter<string>();
  onSubmit(){
    // console.log(this.bikeName);
    //sending the value outside of the component
    // this.bikeAdded.emit(this.bikeName);
    // console.log(this.bikeName);
    // this.bikeName='';

    //sending the value using bike service
    this.bikeservice.addBikeName(this.bikeName);
    this.bikeName='';


  }
}
