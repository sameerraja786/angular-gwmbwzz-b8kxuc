import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgifthenComponent} from './ngifthen/ngifthen.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgifthenComponent],
  exports:[NgifthenComponent]
})
export class NgifthenModule { }