import { inject, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AutenticacaoGuard } from './autenticacao.guard';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Usuario } from '../models/usuario';
import { LoginComponent } from '../components/login/login.component';

describe('AutenticacaoGuard', () => {
  let guard: AutenticacaoGuard;
  let route: ActivatedRouteSnapshot;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AutenticacaoGuard);
    RouterTestingModule.withRoutes([
      { path: 'login', component: LoginComponent}
  ])
  });
  afterEach(() => {
    sessionStorage.removeItem('usuario');
  });
  let usuario: Usuario = {
    nomeUsuario:"admin",
    senha:"admin",
    id: 1,
    nomeCompleto: '',
    ativo: true,
    papel: "ROLE_ADMIN"
}
  it('Usuário está autenticado', inject([AutenticacaoGuard], (service: AutenticacaoGuard) => {
   sessionStorage.setItem('usuario', JSON.stringify(usuario));
   expect(service.canActivate(route)).toBeTruthy();
  }));

  it('Usuário não está autenticado', inject([AutenticacaoGuard], (service: AutenticacaoGuard) => {
    expect(service.canActivate(route)).toBeFalsy();
  }));
  
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
