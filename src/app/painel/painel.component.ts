import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { aFrases } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.less']
})

/*----------------------------------------------
  Classe Painel Component
-----------------------------------------------*/
export class PainelComponent implements OnInit, OnDestroy {

  /*----------------------------------------------
  Propriedades da Classe
  -----------------------------------------------*/
  public aFrases: Frase[] = aFrases
  public cInstrucao: string = 'Traduza a frase'
  public cResposta: string = ''
  public nRodada: number = 0
  public cRodadaFrase: Frase
  public nProgresso:number = 0
  public nTentativas:number = 3
  @Output() public oEncerrarJogo:EventEmitter<string>= new EventEmitter

     /*----------------------------------------------
  Metodo inicializador da pagina
  -----------------------------------------------*/
  ngOnInit(): void {
  }

  /*----------------------------------------------
  Metodo Destruidor da pagina
  -----------------------------------------------*/
  ngOnDestroy(): void {
    console.log('Componente painel foi destruido')
  }

  /*----------------------------------------------
  Metodo Conatrutor New
  -----------------------------------------------*/
  constructor() {
    //console.log(this.aFrases)
    this.cRodadaFrase = this.aFrases[this.nRodada]
  }

  /*----------------------------------------------
  Metodo atualiza Respostas
  -----------------------------------------------*/
  public atualizaResposta(oResposta: Event): void {
    this.cResposta = (<HTMLInputElement>oResposta.target).value
    console.log(this.cResposta)
  }

  /*----------------------------------------------
   Metodo verifica Respostas
  -----------------------------------------------*/
  public verificarResposta(): void {
    //console.log(this.cResposta)

    if (this.cRodadaFrase.cFraseBr == (this.cResposta).trim()) {
      //Trocar pergunta da rodada
      this.nRodada++
      this.nProgresso = this.nProgresso +(100/this.aFrases.length)

      if(this.nRodada === 4){
        alert("Concluiu as traduções com sucesso !")
        this.oEncerrarJogo.emit('Vitoria')
        
      }
      this.atualizaRodada()
      //console.log(this.cRodadaFrase)
    }else{
      this.nTentativas--

      if(this.nTentativas === -1){
        alert('GAME OVER')
        this.oEncerrarJogo.emit('Derrota')
      }

    }
  }

  /*----------------------------------------------
  Metodo Atualiza Rodada
  -----------------------------------------------*/
  public atualizaRodada():void{
    this.cRodadaFrase = this.aFrases[this.nRodada]
    this.cResposta = ''
  }

}
