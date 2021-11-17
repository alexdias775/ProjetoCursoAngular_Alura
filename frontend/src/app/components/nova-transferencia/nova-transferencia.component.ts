import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() aoTransferir = new EventEmitter<any>();
/* Vou tipar como any, um recurso do Typescript que ao invés
de eu dizer que EventEmitter é de um tipo específico, estou
dizendo que esse tipo pode ser híbrido */

/* Por exemplo, imagine que você pode mandar um valor, você
pode mandar um destino ou você pode mandar um objeto com
valor e destino, é um recurso bem legal que dá acesso a bas-
tante coisa, mas é legal utilizá-lo com cautela. Isso porque
em um sistema grande, igual nosso ByteBank, que vai crescer,
em algum momento será necessário voltar aqui e refatorar es-
sa tipagem para um tipo específico para que o próximo desen-
volvedor que for dar manutenção nesse projeto consiga enten-
der o que está sendo propagado aqui*/

  valor!: number;
  destino!: number;

  transferir(){
    console.log('Solicitada nova transferência');

    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);
    // console.log('Valor:', this.valor);
    // console.log('Destino:', this.destino);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
