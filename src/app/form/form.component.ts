import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  bikeName:string='';

  //sending that value to outsideof the component 
  @Output() bikeAdded=new EventEmitter<string>();
  onSubmit(){
    // console.log(this.bikeName);
    this.bikeAdded.emit(this.bikeName);
    // console.log(this.bikeName);
    this.bikeName='';

  }
}
