import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulatyComponent } from './postulaty.component';

describe('PostulatyComponent', () => {
  let component: PostulatyComponent;
  let fixture: ComponentFixture<PostulatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostulatyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostulatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
