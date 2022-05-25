import { inject, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from './login.service';
import { AgendaListComponent } from '../components/agenda-list/agenda-list.component';


describe('LoginService', () => {
  let service: LoginService;
  let agenda : AgendaListComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
    });
    service = TestBed.inject(LoginService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 const user: Usuario = {
      nomeUsuario:"admin",
      senha:"admin",
      id: 1,
      nomeCompleto: '',
      ativo: true,
      papel: "ROLE_ADMIN",
 }
  it('Usuário e senha válidos', inject([LoginService], (service: LoginService) => {  
    expect(service.login(user)).toBe();
  }));
});
