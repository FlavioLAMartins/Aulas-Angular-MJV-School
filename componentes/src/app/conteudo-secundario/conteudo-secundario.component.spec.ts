import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoSecundarioComponent } from './conteudo-secundario.component';

describe('ConteudoSecundarioComponent', () => {
  let component: ConteudoSecundarioComponent;
  let fixture: ComponentFixture<ConteudoSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
