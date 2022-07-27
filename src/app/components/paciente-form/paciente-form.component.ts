import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { AlertaService } from 'src/app/services/alerta.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Utils } from 'src/app/utils/utils';
import { IComponentForm } from '../i-component-form';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styles: [
  ]
})
export class PacienteFormComponent implements OnInit, IComponentForm<Paciente> {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicoAlerta: AlertaService,
    private servico: PacienteService

  ) { }


  registro: Paciente = <Paciente>{};
  pacientes: Paciente[] = Array<Paciente>();
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    
    let data = new Date(this.registro.dataNascimento);
    data = new Date(data.getTime() + data.getTimezoneOffset() * 60 * 1000);
    let registroModificado = Object.assign({}, this.registro);
    registroModificado.dataNascimento = data.toISOString();

    if (this.registro.id) {
      this.servico.update(registroModificado).subscribe({
        complete: () => {
          this.router.navigate(['/agenda']);
          this.servicoAlerta.enviarAlertaSucesso();
        }
      })
    } else {
      this.servico.insert(registroModificado).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertaSucesso();
        }
      })
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Paciente) =>{
          this.registro = resposta;
        }
      })
    }
  }

}
