import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { RemoteService } from '../remote.service';


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  public plant:Plant;
  public plants:any = [];

  
  constructor(private remoteService:RemoteService) { 
    this.plants = remoteService.getPlants();
    this.plant = new Plant("0","plantname",0,"Notset");

  }
  //onrun
  ngOnInit(): void {

    this.loadPlants();
  }

  //load all plants into plants array
  loadPlants() {
    
    return this.remoteService.getPlants().subscribe((data: {}) => {
      this.plants = data;
    });
  }
  //new button function
  newPlant() {
    this.remoteService.createPlant(this.plant).
    subscribe(data => {
     this.plant = data});


     this.loadPlants();
  }
  //update button function
  updatePlant(i:number) {
    this.remoteService.updatePlant(this.plants[i]).
    subscribe(data => {
     this.plant[i] = data});

     this.loadPlants();
  }
  //delete button function
  deletePlant(i:number) {
    this.remoteService.deletePlant(this.plants[i]).
    subscribe(data => {
      this.plants[i] = data});

     this.loadPlants();
  }

}