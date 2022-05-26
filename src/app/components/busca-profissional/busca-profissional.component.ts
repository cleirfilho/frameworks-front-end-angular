import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from 'src/app/models/profissional';
import { ICrudService } from 'src/app/services/i-crud-service';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { Utils } from 'src/app/utils/utils';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-busca-profissional',
  templateUrl: './busca-profissional.component.html',
  styleUrls: ['./busca-profissional.component.css']
})
export class BuscaProfissionalComponent implements OnInit, IComponentList<Profissional> {

  busca_profissional:Profissional = <Profissional>{}

  constructor( private servico:ProfissionalService,) { }
  @Output() eventoBuscaProfissional = new EventEmitter();

  busca(termoBuscaProfissional: Profissional) {
    this.eventoBuscaProfissional.emit(termoBuscaProfissional.nome);
    sessionStorage.setItem('busca_profissional', JSON.stringify(termoBuscaProfissional))
  }
  
  registros: Profissional[] = Array<Profissional>();
  compareById = Utils.compareById;

   get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Profissional[]) => {
        this.registros = reposta;
      },
      complete: () => {
        this.busca_profissional = JSON.parse(sessionStorage.getItem('busca_profissional') || '{}');

      }

    })
  }
  getById(id: number): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Profissional): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Profissional): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.get()
  }

}
