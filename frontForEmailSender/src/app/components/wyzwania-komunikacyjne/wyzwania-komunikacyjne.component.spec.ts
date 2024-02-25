import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyzwaniaKomunikacyjneComponent } from './wyzwania-komunikacyjne.component';

describe('WyzwaniaKomunikacyjneComponent', () => {
  let component: WyzwaniaKomunikacyjneComponent;
  let fixture: ComponentFixture<WyzwaniaKomunikacyjneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WyzwaniaKomunikacyjneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WyzwaniaKomunikacyjneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
