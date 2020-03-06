import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addpessoa',
  templateUrl: './addpessoa.component.html',
  styleUrls: ['./addpessoa.component.css']
})
export class AddpessoaComponent implements OnInit {

  @Output() showAddPessoa = new EventEmitter();
  @Output() sendUsuario = new EventEmitter();

  constructor() { }

  usuario = {
    nome: '',
    dtNasc: '',
    sexo: ''
  };

  onToggleShowAddPessoa() {
    this.showAddPessoa.emit();
  }

  onSendUsuario() {
    this.sendUsuario.emit({...this.usuario});
    this.limparCampos();
  }


  limparCampos() {
    this.usuario.nome = null;
    this.usuario.dtNasc = null;
    this.usuario.sexo = null;
  }

  ngOnInit() {

  }

}
