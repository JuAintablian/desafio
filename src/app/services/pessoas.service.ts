import { Injectable } from '@angular/core';
import { debug } from 'util';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  url: any;

  constructor(private http: HttpClient) { }

  private pessoas = [
      {nome: 'XEDJAN SOUZA SANTOS', dtNasc: '05/05/1997', sexo: 'MASCULINO'},
      {nome: 'ANGELINA JOLIE', dtNasc: '16/10/1980', sexo: 'FEMININO'},
      {nome: 'RENAN GOMES', dtNasc: '30/10/1995', sexo: 'MASCULINO'},
      {nome: 'JACINTA RAMOS', dtNasc: '01/05/1988', sexo: 'FEMININO'}
    ];

  private filtrado = this.pessoas;

  getPessoas(id = false) {
    if (id === false) {
      return this.pessoas;
    }
  }

  deletePessoa(i) {
   this.pessoas.splice(i, 1);
  }

  addPessoa(usuario) {
    this.pessoas.push(usuario);
  }

  ordenarNome() {
    // const data = this.pessoas;
    return this.filtrado.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  ordenarNascimento() {
    // const data = this.pessoas;
    return this.filtrado.sort((a, b) => 0 - (a.dtNasc > b.dtNasc ? 1 : -1));
  }

  filtroHomens() {
    return this.filtrado.filter((item) => item.sexo === 'MASCULINO');
  }

  filtroMulheres() {
    // const data = this.pessoas;
    return this.filtrado.filter((item) => item.sexo === 'FEMININO');
  }

  filtroComposto(str) {
    const filtroComposto = str.split(';');
    this.filtrado = this[filtroComposto[0]]();

    return this[filtroComposto[1]]();
  }

  limparFiltros() {
    return this.getPessoas();
  }

   goToCorreio( cep: HttpParams): Observable<any> {
     return this.http.get<any>(`http://viacep.com.br/ws/${cep}/json/`);
  }

  // pesquisa(pesquisado) {
  //   debugger
  //   this.filtrado.filter((item) => item.nome.includes(pesquisado));
  //   return this.filtrado;
  // }

}
