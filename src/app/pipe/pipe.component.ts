import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit {

  toDate=new Date();

  data="helo world";
  arr=['value 1','value 2','value 3','value 4','value 5'];
  price=100;
  numberValue: number = 1234.56789;

  jsonData: any;


  constructor(private http: HttpClient) {
    this.reset();

  }

  ngOnInit() {
    console.log('asyn');

    this.jsonData = this.http.get('https://jsonplaceholder.typicode.com/todos/100');
    console.log( this.jsonData );
    console.log('helo');

  }

//observable $ 
  currentDateAndTime$=interval(1000).pipe(
    map(x=>new Date()),
    take(1) // only run 10 times
  );


  newData=new Observable(subscriber=>{
    console.log('helo');
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(x=>subscriber.next(x))
  });


  //promise
  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      console.log( this.resolve!('hi there!'));
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

}
