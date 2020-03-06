import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() recEndereco;
  @Output() sendEndereco = new EventEmitter();

  cep = '';

  constructor(private pessoasService: PessoasService) { }

  onSendEndereco() {
    this.sendEndereco.emit(this.cep);
  }

  ngOnInit() {
  }

}
