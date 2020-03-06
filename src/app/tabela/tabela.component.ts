import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  pesquisa = '';
  pesquisado;

  @Input() listaPessoas: Array<any>;
  @Output() showAddPessoa = new EventEmitter();
  @Output() delPessoa = new EventEmitter();
  @Output() resPesq = new EventEmitter();

  constructor() { }

  onToggleShowAddPessoa() {
    console.log("falei");
    this.showAddPessoa.emit();
  }

  deleteUsuario(i) {
    console.log(i);
    this.delPessoa.emit(i);
  }

  ngOnInit() {
  }

}
