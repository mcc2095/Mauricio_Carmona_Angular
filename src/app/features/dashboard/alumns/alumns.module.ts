import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsComponent } from './alumns.component';


@NgModule({
  declarations: [
    AlumnsComponent
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule
  ],
  exports: [
    AlumnsComponent
  ]
})
export class AlumnsModule { }
