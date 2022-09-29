import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSideNavComponent } from './collapse-side-nav.component';

describe('CollapseSideNavComponent', () => {
  let component: CollapseSideNavComponent;
  let fixture: ComponentFixture<CollapseSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
