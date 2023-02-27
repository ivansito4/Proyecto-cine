import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminoMigasComponent } from './camino-migas.component';

describe('CaminoMigasComponent', () => {
  let component: CaminoMigasComponent;
  let fixture: ComponentFixture<CaminoMigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminoMigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaminoMigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
