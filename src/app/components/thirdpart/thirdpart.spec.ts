import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thirdpart } from './thirdpart';

describe('Thirdpart', () => {
  let component: Thirdpart;
  let fixture: ComponentFixture<Thirdpart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thirdpart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thirdpart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
