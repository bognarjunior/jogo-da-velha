import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(
    private jogoDaVelhaService: JogoDaVelhaService
  ) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela inicio deve ser exibida
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela fim do jogo deve ser exibida
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo
   * 
   * @return void
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao cliar em um local do tabuleiro
   * 
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }
}
