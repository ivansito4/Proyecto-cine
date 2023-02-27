import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesComponent } from './sesiones.component';

describe('SesionesComponent', () => {
  let component: SesionesComponent;
  let fixture: ComponentFixture<SesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
