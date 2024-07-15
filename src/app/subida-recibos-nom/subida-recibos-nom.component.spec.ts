import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaRecibosNomComponent } from './subida-recibos-nom.component';

describe('SubidaRecibosNomComponent', () => {
  let component: SubidaRecibosNomComponent;
  let fixture: ComponentFixture<SubidaRecibosNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubidaRecibosNomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubidaRecibosNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
