import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLoremComponent } from './section-lorem.component';

describe('SectionLoremComponent', () => {
  let component: SectionLoremComponent;
  let fixture: ComponentFixture<SectionLoremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLoremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
