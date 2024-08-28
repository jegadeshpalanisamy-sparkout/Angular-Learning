import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {

  constructor() { }

  bikeNameSubject= new BehaviorSubject<string[]>([]);
  bikeName$=this.bikeNameSubject.asObservable();

  addBikeName(name:string){
    //get current or old values 
    const currentBikeValues=this.bikeNameSubject.getValue();
    //added new name value into old values
    const updateNames=[...currentBikeValues,name];
    this.bikeNameSubject.next(updateNames);
  }
}
