import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatlistComponent } from './platlist.component';

describe('PlatlistComponent', () => {
  let component: PlatlistComponent;
  let fixture: ComponentFixture<PlatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
