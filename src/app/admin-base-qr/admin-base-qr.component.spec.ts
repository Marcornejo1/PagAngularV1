import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseQRComponent } from './admin-base-qr.component';

describe('AdminBaseQRComponent', () => {
  let component: AdminBaseQRComponent;
  let fixture: ComponentFixture<AdminBaseQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBaseQRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBaseQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
