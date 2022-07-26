import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css'],
})
export class TeacherLoginComponent implements OnInit {
  constructor(private router: Router) {}
  teacherlogin2() {
    this.router.navigate(['home']);
    console.log('this is sameer raha');
  }
  ngOnInit() {}
}
