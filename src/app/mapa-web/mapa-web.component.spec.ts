import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaWebComponent } from './mapa-web.component';

describe('MapaWebComponent', () => {
  let component: MapaWebComponent;
  let fixture: ComponentFixture<MapaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
