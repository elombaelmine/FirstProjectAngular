import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ninepart } from './ninepart';

describe('Ninepart', () => {
  let component: Ninepart;
  let fixture: ComponentFixture<Ninepart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ninepart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ninepart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
