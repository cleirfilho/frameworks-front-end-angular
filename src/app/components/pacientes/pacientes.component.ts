import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { AlertaService } from 'src/app/services/alerta.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit , IComponentList<Paciente> {

  constructor(

    private servico:PacienteService,
    private servicoAlerta: AlertaService
  ) { }
  registros: Paciente[] = Array<Paciente>();
  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Paciente[]) => {
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
