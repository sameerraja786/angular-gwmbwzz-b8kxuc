import { Component, OnInit } from '@angular/core';
import employees from "../assets/employees.json";
@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  employeeData:any
  constructor() {
    this.employeeData=employees;
   }
  
  ngOnInit() {
  }

}