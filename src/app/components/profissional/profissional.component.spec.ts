import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule} from '@angular/common/http/testing';

import { ProfissionalComponent } from './profissional.component';

describe('ProfissionalComponent', () => {
  let component: ProfissionalComponent;
  let fixture: ComponentFixture<ProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
             imports: [
        HttpClientTestingModule,
      ],
      declarations: [ ProfissionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
