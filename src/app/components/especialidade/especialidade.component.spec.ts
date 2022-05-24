import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule} from '@angular/common/http/testing';

import { EspecialidadeComponent } from './especialidade.component';

describe('EspecialidadeComponent', () => {
  let component: EspecialidadeComponent;
  let fixture: ComponentFixture<EspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
             imports: [
        HttpClientTestingModule,
      ],
      declarations: [ EspecialidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
