import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectOrdenacao = '';
  selectFiltro = '';

  @Input() menuConfig: Array<any>;
  @Output() acaoDoBotao = new EventEmitter();

  constructor(private router: Router) { }

  onSelectMenu(data = '') {
    if (data === 'filtrar') {
      return this.filtrar();
    }
    return this.acaoDoBotao.emit(data);
  }

  filtrar() {
    if (this.selectFiltro !== '' && this.selectOrdenacao !== '') {
      const acoesConcatenadas = `${this.selectFiltro};${this.selectOrdenacao}`;
      return this.onSelectMenu(acoesConcatenadas);
    }
    return this.onSelectMenu(this.selectFiltro || this.selectOrdenacao);
  }

  goToCorreio() {
    this.router.navigate(['/correio']);
  }

  ngOnInit() {
  }

}
