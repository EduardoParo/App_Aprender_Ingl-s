import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

/*----------------------------------------------
  Classe Coracao
-----------------------------------------------*/
export class Coracao{
    constructor(
        public lCheio:boolean,
        public cUrlCheio:string = '/assets/coracao_cheio.png',
        public cUrlVazio:string = '/assets/coracao_vazio.png',
    ){}

    public exibeCoracao():string{
        if(this.lCheio){
            return this.cUrlCheio
        }else{
            return this.cUrlVazio
        }
    }
}