import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContentComponent } from './export-content.component';

describe('ExportContentComponent', () => {
  let component: ExportContentComponent;
  let fixture: ComponentFixture<ExportContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
