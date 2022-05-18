import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaFormComponent } from './components/agenda-form/agenda-form.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProfissionalComponent } from './components/profissional/profissional.component';
import { UnidadeFormComponent } from './components/unidade-form/unidade-form.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AutenticacaoGuard } from './services/autenticacao.guard';

const routes: Routes = [
  { path: '', canActivate: [AutenticacaoGuard], children: [
    { path: 'agenda', component: AgendaListComponent },
    { path: 'agenda/form', component: AgendaFormComponent },
    { path: 'atendimento', component: AtendimentoListComponent},
    { path: 'profissionais', component: ProfissionalComponent},
    { path: 'config', canActivate: [AutenticacaoGuard], data: {papel: "ROLE_ADMIN"}, children: [
      { path: 'usuarios', component: UsuarioComponent},
      { path: 'unidades', component: UnidadesComponent},
      { path: 'unidades/form', component: UnidadeFormComponent}
    ]}
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
