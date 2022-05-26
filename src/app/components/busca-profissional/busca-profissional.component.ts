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

   busca_profissional:string | null = ''

  constructor( private servico:ProfissionalService,) { }
  @Output() eventoBuscaProfissional = new EventEmitter();

  busca(termoBuscaProfissional: string) {
    this.eventoBuscaProfissional.emit(termoBuscaProfissional);
    sessionStorage.setItem('busca_profissional',termoBuscaProfissional)
  }
  
  registros: Profissional[] = Array<Profissional>();
  compareById = Utils.compareById;

   get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (reposta : Profissional[]) => {
        this.registros = reposta;
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
    this.busca_profissional = sessionStorage.getItem('busca_profissional'); 
    this.get()
  }

}
