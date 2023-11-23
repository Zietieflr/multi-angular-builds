import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootTwoComponent } from './root-two.component';

describe('RootTwoComponent', () => {
  let component: RootTwoComponent;
  let fixture: ComponentFixture<RootTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
