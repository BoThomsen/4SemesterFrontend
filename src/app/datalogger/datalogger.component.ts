import { Component, OnInit } from '@angular/core';
import { Datalogger } from '../datalogger';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-datalogger',
  templateUrl: './datalogger.component.html',
  styleUrls: ['./datalogger.component.css']
})
export class DataloggerComponent implements OnInit {
  public datalogger:Datalogger;
  public dataloggerData:any = [];


  constructor(private remoteService:RemoteService) {
    this.dataloggerData = remoteService.getDataloggerData();
    this.datalogger = new Datalogger("0",1,0,"Dry",new Date());
   }

  //gets all measured data on run
  ngOnInit(): void {
    this.loadDatalogger();
  }

  //button to get measured data from remoteservice
  loadDatalogger() {
    return this.remoteService.getDataloggerData().subscribe((data: {}) => {
      this.dataloggerData = data;
    });
  }




}
