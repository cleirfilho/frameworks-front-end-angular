import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './components/agenda-form/agenda-form.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { BarraComandosComponent } from './components/barra-comandos/barra-comandos.component';
import { ErroInterceptor } from './interceptors/erro.interceptor';
import { AlertaComponent } from './components/alerta/alerta.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RequisicaoInterceptor } from './interceptors/requisicao.interceptor';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { FiltragemBuscaComponent } from './components/filtragem-busca/filtragem-busca.component'


@NgModule({
  declarations: [
    AppComponent,
    AgendaListComponent,
    AgendaFormComponent,
    AtendimentoListComponent,
    BarraComandosComponent,
    AlertaComponent,
    LoginComponent,
    UsuarioComponent,
    PacienteListComponent,
    PacienteFormComponent,
    FiltragemBuscaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequisicaoInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
