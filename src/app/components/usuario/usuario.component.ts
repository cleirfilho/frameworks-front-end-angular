import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AlertaService } from 'src/app/services/alerta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, IComponentList<Usuario> {

  constructor(
    private servico: UsuarioService,
    private servicoAlerta: AlertaService
  ) { }
  registros: Usuario[] = Array<Usuario>();
  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Usuario[]) => {
        this.registros = reposta;
      }
    })
  }
  delete(id: number): void {
    if (confirm('Deseja realmente cancelar o agendamento?')) {
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
          this.servicoAlerta.enviarAlertaSucesso();
        }
      })
    }
  }

  ngOnInit(): void {
    this.get()
  }

}
