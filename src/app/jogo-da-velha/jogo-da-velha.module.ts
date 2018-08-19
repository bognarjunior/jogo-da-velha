import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JogoDaVelhaComponent
  ],
  exports: [
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
