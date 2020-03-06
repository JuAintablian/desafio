import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuConfig;
  pessoas;
  showAddPessoa = false;
  deletePessoa = true;
  retornoApi;


  constructor(private pessoasService: PessoasService, private router: Router) {
  }

  aplicarFiltro(filtro) {
    if (filtro.indexOf(';') === -1) {
      return this.pessoas = this.pessoasService[filtro]();
        }
    return this.pessoas = this.pessoasService.filtroComposto(filtro);
  }

  getItensMenu() {
    return {
      botoes: [
        { label: 'APLICAR FILTROS', action: 'filtrar' },
        { label: 'LIMPAR FILTROS', action: 'limparFiltros' },
      ],
      selects: {
        ordenacao: [
          { descricao: 'ORDENAR NOME', action: 'ordenarNome' },
          { descricao: 'ORDENAR NASCIMENTO', action: 'ordenarNome' }
        ],
        filtros: [
          { descricao: 'FILTRO HOMENS', action: 'filtroHomens' },
          { descricao: 'FILTRO MULHERES', action: 'filtroMulheres' }
        ]
      }
    };
  }

  toggleShowAddPessoa() {
    this.showAddPessoa = !this.showAddPessoa;
  }

  addUsuario(usuario) {
    this.pessoasService.addPessoa(usuario);
  }

  delUsuario(i) {
    this.pessoasService.deletePessoa(i);
  }

  acaoDoBotao(data) {
    console.log(data);
    this.aplicarFiltro(data);
  }

  ngOnInit() {
    this.menuConfig = this.getItensMenu();
    this.pessoas = this.pessoasService.getPessoas();
  }
}
