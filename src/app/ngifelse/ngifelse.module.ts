import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgifelseComponent} from './ngifelse/ngifelse.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgifelseComponent],
  exports:[NgifelseComponent]
})
export class NgifelseModule { }