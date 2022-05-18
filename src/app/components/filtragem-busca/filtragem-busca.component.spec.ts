import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltragemBuscaComponent } from './filtragem-busca.component';

describe('FiltragemBuscaComponent', () => {
  let component: FiltragemBuscaComponent;
  let fixture: ComponentFixture<FiltragemBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltragemBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltragemBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
