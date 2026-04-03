import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sixthpart } from './sixthpart';

describe('Sixthpart', () => {
  let component: Sixthpart;
  let fixture: ComponentFixture<Sixthpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sixthpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sixthpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
