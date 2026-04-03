import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fifthpart } from './fifthpart';

describe('Fifthpart', () => {
  let component: Fifthpart;
  let fixture: ComponentFixture<Fifthpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fifthpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fifthpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
