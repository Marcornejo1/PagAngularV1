import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaArchivosContabilidadComponent } from './subida-archivos-contabilidad.component';

describe('SubidaArchivosContabilidadComponent', () => {
  let component: SubidaArchivosContabilidadComponent;
  let fixture: ComponentFixture<SubidaArchivosContabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubidaArchivosContabilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubidaArchivosContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
