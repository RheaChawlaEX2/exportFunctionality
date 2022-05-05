import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronCardComponent } from './chevron-card.component';

describe('ChevronCardComponent', () => {
  let component: ChevronCardComponent;
  let fixture: ComponentFixture<ChevronCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChevronCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevronCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
