import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenpart } from './tenpart';

describe('Tenpart', () => {
  let component: Tenpart;
  let fixture: ComponentFixture<Tenpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tenpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
