import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { BuscaProfissionalComponent } from './busca-profissional.component';

describe('BuscaProfissionalComponent', () => {
  let component: BuscaProfissionalComponent;
  let fixture: ComponentFixture<BuscaProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ BuscaProfissionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
