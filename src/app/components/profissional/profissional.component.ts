import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/profissional';
import { AlertaService } from 'src/app/services/alerta.service';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-Profissional',
  templateUrl: './Profissional.component.html',
  styleUrls: ['./Profissional.component.css']
})
export class ProfissionalComponent implements OnInit, IComponentList<Profissional> {

  constructor(
    private servico:ProfissionalService,
    private servicoAlerta: AlertaService
  ) { }
  registros: Profissional[] = Array<Profissional>();

  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Profissional[]) => {
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
