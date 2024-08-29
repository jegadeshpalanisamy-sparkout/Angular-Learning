import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  CountryList:Country[]=[
    new Country('1','Srilanka'),
    new Country('2','England'),
    new Country('3','Scotland')
  ]

  //create form group and make every field to form control
  makeFormGroup= new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    lastName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl({
      value:'jega@yopmail.com',
      disabled:true
    },[Validators.required]),
    country:new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    married: new FormControl("",[Validators.requiredTrue]),
    address:new FormGroup({
      street: new FormControl("",[Validators.required]),
      pincode: new FormControl("",[Validators.required])
    })
  })

  onSubmit(){
    console.log(this.makeFormGroup.value)
  }

  get firstname() {
    return this.makeFormGroup.get('firstName')
  }
  
  get lastname() {
    return this.makeFormGroup.get('lastName')
  }
  get email() {
    return this.makeFormGroup.get('email')
  }

  get gender() {
    return this.makeFormGroup.get('gender')
  }

  get marriedStatus() {
    return this.makeFormGroup.get('married')
  }
  get country() {
    return this.makeFormGroup.get('country')
  }


  get streets() {
    return this.makeFormGroup.get('address.street')
  }

  get pin() {
    return this.makeFormGroup.get('address.pincode')
  }


}

//set to country dynamically for form
class Country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}