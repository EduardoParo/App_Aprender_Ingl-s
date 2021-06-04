import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  /*---------------------------------
  Propriedades
  ----------------------------------*/
  title = 'app01';
  public lJogoEmAndamento:boolean = true
  public cTipoEncerramento:string=''

  public encerrarJogo(cTipo:string):void{
    console.log(cTipo)
    this.lJogoEmAndamento = false
    this.cTipoEncerramento= cTipo
    
  }

  public reiniciarJogo():void{
    this.lJogoEmAndamento=true
    this.cTipoEncerramento = ''
  }
}
