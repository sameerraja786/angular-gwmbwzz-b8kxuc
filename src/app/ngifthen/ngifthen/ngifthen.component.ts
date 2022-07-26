import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifthen',
  templateUrl: './ngifthen.component.html',
  styleUrls: ['./ngifthen.component.css']
})
export class NgifthenComponent implements OnInit {
  isValid:boolean = true;
  constructor() { }
  logIn = true;
  ngOnInit():void {
  }

}
