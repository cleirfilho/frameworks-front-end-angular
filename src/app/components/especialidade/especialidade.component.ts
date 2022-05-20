import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade';
import { AlertaService } from 'src/app/services/alerta.service';
import { EspecialidadeService } from 'src/app/services/especialidade.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-especialidade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.css']
})
export class EspecialidadeComponent implements OnInit, IComponentList<Especialidade> {

  constructor(
    private servico : EspecialidadeService,
    private servicoAlerta: AlertaService

  ) { }

  registros: Especialidade[] = Array<Especialidade>();

  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Especialidade[]) => {
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
