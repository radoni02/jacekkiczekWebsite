import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyciorysComponent } from './zyciorys.component';

describe('ZyciorysComponent', () => {
  let component: ZyciorysComponent;
  let fixture: ComponentFixture<ZyciorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZyciorysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZyciorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
