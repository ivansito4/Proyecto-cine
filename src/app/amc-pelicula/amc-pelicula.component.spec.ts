import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcPeliculaComponent } from './amc-pelicula.component';

describe('AmcPeliculaComponent', () => {
  let component: AmcPeliculaComponent;
  let fixture: ComponentFixture<AmcPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
