import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seventhpart } from './seventhpart';

describe('Seventhpart', () => {
  let component: Seventhpart;
  let fixture: ComponentFixture<Seventhpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seventhpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seventhpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
