import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTradeComponent } from './list-trade.component';

describe('ListTradeComponent', () => {
  let component: ListTradeComponent;
  let fixture: ComponentFixture<ListTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
