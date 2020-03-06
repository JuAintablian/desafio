import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-correio',
  templateUrl: './correio.component.html',
  styleUrls: ['./correio.component.css']
})
export class CorreioComponent implements OnInit {

  constructor(private pessoasService: PessoasService) { }

  endereco;

  addCep(cep) {
    this.pessoasService.goToCorreio(cep).subscribe(item => {
      this.endereco = item;
    });
  }

  ngOnInit() {
  }

}
