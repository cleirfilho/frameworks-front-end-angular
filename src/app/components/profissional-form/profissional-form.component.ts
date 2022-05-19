import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional';
import { Unidade } from 'src/app/models/unidade';
import { AlertaService } from 'src/app/services/alerta.service';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { Utils } from 'src/app/utils/utils';
import { IComponentForm } from '../i-component-form';

@Component({
  selector: 'app-profissional-form',
  templateUrl: './profissional-form.component.html',
  styleUrls: ['./profissional-form.component.css']
})
export class ProfissionalFormComponent implements OnInit, IComponentForm<Profissional> {

  constructor(
    private servico : ProfissionalService,
    private route: ActivatedRoute,
    private router: Router,
    private servicoAlerta: AlertaService,
    private servicoUnidade: UnidadesService
  ) { }

  unidades : Unidade [] = Array<Unidade>();
  registro: Profissional = <Profissional>{};
  compareById = Utils.compareById;
  

  submit(form: NgForm): void {
    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/agenda']);
          this.servicoAlerta.enviarAlertaSucesso();
        }
      })
    } else {
      this.servico.insert(this.registro).subscribe({
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
        next: (resposta: Profissional) =>{
          this.registro = resposta;
        }
      })
    }

    this.servicoUnidade.get().subscribe({
      next: (resposta : Unidade[]) => {
        this.unidades = resposta;
      }
    })
   
  }

}
