import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToListComponent } from './to-list.component';

describe('ToListComponent', () => {
  let component: ToListComponent;
  let fixture: ComponentFixture<ToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
