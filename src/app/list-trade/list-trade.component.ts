import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TradeService} from "../service/trade.service";
import {Trade} from "../model/trade.model";

@Component({
  selector: 'app-list-trade',
  templateUrl: './list-trade.component.html',
  styleUrls: ['./list-trade.component.css']
})
export class ListTradeComponent implements OnInit {

  trades: Trade[];

  constructor(private router: Router, private tradeService: TradeService) { }

  ngOnInit() {
    this.tradeService.getTrades()
      .subscribe( data => {
        this.trades = data;
      });
  }

  deleteTrade(trade: Trade): void {
    this.tradeService.deleteTrade(trade.id)
      .subscribe( data => {
        this.trades = this.trades.filter(u => u !== trade);
      })
  };

  editTrade(trade: Trade): void {
    localStorage.removeItem("editTradeId");
    localStorage.setItem("editTradeId", trade.id.toString());
    this.router.navigate(['edit-trade']);
  };

  addTrade(): void {
    this.router.navigate(['add-trade']);
  };
}

