import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/models/convenio';
import { AlertaService } from 'src/app/services/alerta.service';
import { ConvenioService } from 'src/app/services/convenio.service';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit , IComponentList<Convenio> {

  constructor(

    private servico:ConvenioService,
    private servicoAlerta: AlertaService
  ) { }
  registros: Convenio[] = Array<Convenio>();
  
  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Convenio[]) => {
        this.registros = reposta;
      }
    })
  }
  delete(id: number): void {
    if (confirm('Deseja realmente deletar o registro?')) {
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
