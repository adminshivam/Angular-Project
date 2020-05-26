import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';



@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RoomsComponent
  ]
})
export class RoomsModule { }
