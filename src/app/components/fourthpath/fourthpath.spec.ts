import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourthpath } from './fourthpath';

describe('Fourthpath', () => {
  let component: Fourthpath;
  let fixture: ComponentFixture<Fourthpath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fourthpath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fourthpath);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
