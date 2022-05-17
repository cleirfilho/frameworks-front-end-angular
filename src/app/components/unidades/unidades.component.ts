import { Component, OnInit } from '@angular/core';
import { Unidade } from 'src/app/models/unidade';
import { AlertaService } from 'src/app/services/alerta.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit, IComponentList<Unidade> {

  constructor(
    private servico:UnidadesService,
    private servicoAlerta: AlertaService
  ) { }

  registros: Unidade[] = Array<Unidade>();

  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Unidade[]) => {
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
