import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  people=[
    {
      name:'Sameer',
      country:'India',
      rollno:101,
      age:23
    },
    {
      name:"Mohan",
      country:"uk",
      rollno:102,
      age:23
    },
    {
      name:"Dinesh",
      country:"India",
      rollno:103,
      age:23
    },
    {
      name:"Mani",
      country:"japan",
      rollno:104,
      age:23
    },
    {
      name:"Sohan",
      country:"dubai",
      rollno:105,
      age:23
    }
  ]
  
  getcolor(country)
  {
    switch(country)
    {
      case 'uk':
      return 'black';

      case 'India':
      return 'orange';

      case 'japan':
      return 'blue';

      case 'dubai':
      return 'red';

    }
  }
  constructor() { }

  ngOnInit() {
  }

}