import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildTwoComponent } from './grandchild-two.component';

describe('GrandchildTwoComponent', () => {
  let component: GrandchildTwoComponent;
  let fixture: ComponentFixture<GrandchildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandchildTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandchildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
