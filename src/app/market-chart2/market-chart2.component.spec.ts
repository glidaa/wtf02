import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketChart2Component } from './market-chart2.component';

describe('MarketChart2Component', () => {
  let component: MarketChart2Component;
  let fixture: ComponentFixture<MarketChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
