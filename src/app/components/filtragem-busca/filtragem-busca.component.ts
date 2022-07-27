import { registerLocaleData } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Atendimento } from 'src/app/models/atendimento';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/services/profissional.service';


@Component({
  selector: 'app-filtragem-busca',
  templateUrl: './filtragem-busca.component.html',
  styles: [
  ]
})
export class FiltragemBuscaComponent implements OnInit {

  constructor(
    private servicoProfissional: ProfissionalService,
  ) { }

  registro: Atendimento = <Atendimento>{};
  profissionais: Profissional[] = Array<Profissional>();

  @Output() eventoBusca = new EventEmitter();

  busca(termoBusca: string) {
    this.eventoBusca.emit(termoBusca);
  }

  ngOnInit(): void {
    
    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta;
      }
    })
  }

}
