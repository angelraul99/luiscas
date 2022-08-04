import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForatoComponent } from './forato.component';

describe('ForatoComponent', () => {
  let component: ForatoComponent;
  let fixture: ComponentFixture<ForatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
