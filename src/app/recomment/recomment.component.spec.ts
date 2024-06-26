import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentComponent } from './recomment.component';

describe('RecommentComponent', () => {
  let component: RecommentComponent;
  let fixture: ComponentFixture<RecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
