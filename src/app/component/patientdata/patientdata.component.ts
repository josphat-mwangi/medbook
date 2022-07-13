import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {
  


  public  patients!:any[]
  constructor(private list: DataService) { }
  ngOnInit(): void {
      this.patients = this.list.getList();
      

      
  }

}
 