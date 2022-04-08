import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelevererListComponent } from './deleverer-list.component';

describe('DelevererListComponent', () => {
  let component: DelevererListComponent;
  let fixture: ComponentFixture<DelevererListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelevererListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelevererListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
