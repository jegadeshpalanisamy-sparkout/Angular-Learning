import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello ';

  fullName='john' ;

    test(){
      console.log(this.fullName);
    return "This is test function";
  }
  
  job='<i>Software developer</i>'

  clickCount=0;
  buttonClickCount() {
    // alert(this.clickCount);
    this.clickCount++;
  }


  //  Combined Example: Property Binding and Event Binding 

  isButtonDisabled=true;
  inputText='';
  
  onInputChanged(event :Event) {
    const inputElement=event.target as HTMLInputElement;
    this.inputText=inputElement.value ;
    // console.log(this.inputText);
    // console.log(!this.inputText);

    this.isButtonDisabled=!this.inputText;
  }

  onButtonClick() {
    alert(`You typed: ${this.inputText}`);

  }


  //focus event
  message = "Focus on the input field.";

  handleFocus(){
        this.message = "Input field is focused!";
  }

  //blur event
  blurMsg="Type somethis and then click outside";
  handleBlur() {
    this.blurMsg="Input field lost focus!";
  }

  //change event
  selectedValue = "";

  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
  }

  //mouse over
  mouseMsg = "Hover over the button to see a message.";

  handleMouseOver() {
    this.message = "Mouse is over the button!";
  }

  //keyUp
  keyPressed =""
  handleKeyup(event :KeyboardEvent){
    this.keyPressed=event.key;
  }

  //submit
  // formData = "";

  // handleSubmit(event: Event) {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement; // Cast the event target to HTMLFormElement

  //   const inputField = form.elements['inputField'] as HTMLInputElement; // Access the input field with bracket notation

  //   if (inputField) {
  //     this.formData = `Form submitted with value: ${inputField.value}`;
  //   } else {
  //     this.formData = 'Input field not found.';
  //   }
  // }
}
