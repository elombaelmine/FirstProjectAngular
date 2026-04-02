import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondpart } from './secondpart';

describe('Secondpart', () => {
  let component: Secondpart;
  let fixture: ComponentFixture<Secondpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
