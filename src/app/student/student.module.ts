import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{StudentComponent} from './student/student.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentComponent],
  exports:[StudentComponent]
})
export class StudentModule { }
