import { Injectable } from '@angular/core';
import { Plant } from './plant';

@Injectable({
    providedIn: 'root'
  })
  export class PlantService {
  
    // Define the Array 
    public plants : Array<Plant>;
    constructor() {  
          this.plants = new Array();
         // this.plants.push(new Plant(3,"Plant2", 48.22, 33.57,"Need Water","True"));
     }
  
     // Define the methods getAll() etc.
     public getAll():Array<Plant> {
       return this.plants;
     }
  
     public update(index:number):void {
        // update
    }
    
  }
  