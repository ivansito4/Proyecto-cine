import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButacasComponent } from './butacas.component';

describe('ButacasComponent', () => {
  let component: ButacasComponent;
  let fixture: ComponentFixture<ButacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButacasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
