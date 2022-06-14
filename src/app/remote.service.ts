import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs'; // new
import { catchError, retry } from 'rxjs/operators';  //new
import { Datalogger } from './datalogger';
import {Plant} from './plant'


@Injectable({
  providedIn: 'root'
})
export class RemoteService {
 
  private url:string = "http://localhost:3000/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  
  // Injection
  constructor(private http: HttpClient) {
    
  }

    // get all measurements from datalogger
    getDataloggerData():Observable<Datalogger>{
      return this.http.get<Datalogger>(this.url + "datalogger");
    }

  // get all plants
  getPlants():Observable<Plant>{
    return this.http.get<Plant>(this.url + "plants");
  }

  // add a new plant
  createPlant(plant: Plant): Observable<Plant> {
    console.log("posting this plant:" +plant.PlantNo + " " +plant.Name +
     " " + plant.Price + " " + plant.Certificate);
    return this.http.post<Plant>(this.url + "plants", JSON.stringify(plant),this.httpOptions);
  }

  //updatePlant(Certificate)
  updatePlant(plant: Plant): Observable<Plant> {
    console.log("updating this plant: " +plant.PlantNo);
    return this.http.put<Plant>(this.url+"plants/"+plant.PlantNo, JSON.stringify(plant),this.httpOptions);
  }
  
  //deleteplant
  deletePlant(plant: Plant): Observable<Plant> {
    console.log("deleting this plant: " + plant.PlantNo );
    return this.http.delete<Plant>(this.url+"plants/"+plant.PlantNo);
  }
  
}
