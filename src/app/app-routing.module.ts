import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaFormComponent } from './components/agenda-form/agenda-form.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { EspecialidadeFormComponent } from './components/especialidade-form/especialidade-form.component';
import { EspecialidadeComponent } from './components/especialidade/especialidade.component';
import { LoginComponent } from './components/login/login.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ProfissionalFormComponent } from './components/profissional-form/profissional-form.component';
import { ProfissionalComponent } from './components/profissional/profissional.component';
import { UnidadeFormComponent } from './components/unidade-form/unidade-form.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AutenticacaoGuard } from './services/autenticacao.guard';

const routes: Routes = [
  { path: '', canActivate: [AutenticacaoGuard], children: [
    { path: 'agenda', component: AgendaListComponent },
    { path: 'agenda/form', component: AgendaFormComponent },
    { path: 'atendimento', component: AtendimentoListComponent},
    { path: 'profissionais', component: ProfissionalComponent},
    { path: 'convenios', component: ConveniosComponent},
    { path: 'pacientes', component: PacientesComponent},
    { path: 'profissionais/form', component: ProfissionalFormComponent},
    { path: 'config', canActivate: [AutenticacaoGuard], data: {papel: "ROLE_ADMIN"}, children: [
      { path: 'usuarios', component: UsuarioComponent},
      { path: 'usuarios/form', component: UsuarioFormComponent},
      { path: 'unidades', component: UnidadesComponent},
      { path: 'unidades/form', component: UnidadeFormComponent},
      { path: 'especialidades', component: EspecialidadeComponent},
      { path: 'especialidades/form', component: EspecialidadeFormComponent},
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
