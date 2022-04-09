import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfragisticsFilteringComponent } from './infragistics-filtering.component';

describe('InfragisticsFilteringComponent', () => {
  let component: InfragisticsFilteringComponent;
  let fixture: ComponentFixture<InfragisticsFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfragisticsFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfragisticsFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
