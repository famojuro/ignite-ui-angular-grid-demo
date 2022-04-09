import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfragisticsEditingComponent } from './infragistics-editing.component';

describe('InfragisticsEditingComponent', () => {
  let component: InfragisticsEditingComponent;
  let fixture: ComponentFixture<InfragisticsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfragisticsEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfragisticsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
