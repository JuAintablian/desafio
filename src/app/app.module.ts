import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddpessoaComponent } from './addpessoa/addpessoa.component';
import { PessoasService } from './services/pessoas.service';
import { CorreioComponent } from './correio/correio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { MenuCorreioComponent } from './menu-correio/menu-correio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TabelaComponent,
    AddpessoaComponent,
    CorreioComponent,
    HomeComponent,
    EnderecoComponent,
    MenuCorreioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  exports: [CorreioComponent],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
