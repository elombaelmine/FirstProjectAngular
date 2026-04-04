import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eigthpart } from './eigthpart';

describe('Eigthpart', () => {
  let component: Eigthpart;
  let fixture: ComponentFixture<Eigthpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eigthpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eigthpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
