import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{
  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','Aus'),
    new Country('3','USA'),
    new Country('4','china'),
  ]


  //show form details(all fields) on my console
  onFormSubmit(myForm:NgForm){
    console.log(myForm.value );
  }

  //view particular input field form controls
  // onFormSubmit(formcontrol:NgControl){
  //   console.log(formcontrol);
  // }

  

  myFormDetails!:FormDatas;
  ngOnInit(): void {
    this.myFormDetails={
      firstName:'jega',
      lastName:'desh',
      email:'jega@yopmail.com',
      gender:'male',
      isMarried:true,
      country:'2',
      address:{
        street:'north',
        pincode:'654332'
      }

    }
  }

}

class Country{
  id:string;
  name:string

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}

class FormDatas{

  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  isMarried!:boolean;
  country!:string;
  address!:{street:string,pincode:string}

}

