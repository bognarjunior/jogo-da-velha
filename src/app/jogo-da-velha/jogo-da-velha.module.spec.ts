import { JogoDaVelhaModule } from './jogo-da-velha.module';

describe('JogoDaVelhaModule', () => {
  let jogoDaVelhaModule: JogoDaVelhaModule;

  beforeEach(() => {
    jogoDaVelhaModule = new JogoDaVelhaModule();
  });

  it('should create an instance', () => {
    expect(jogoDaVelhaModule).toBeTruthy();
  });
});
