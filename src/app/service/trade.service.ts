import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Trade} from "../model/trade.model";

@Injectable()
export class TradeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://172.104.169.11:8888/api/trade';

  getTrades() {
    /* let fakeTrades = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeTrades).delay(5000);*/
    return this.http.get<Trade[]>(this.baseUrl);
  }

  getTradeById(id: number) {
    return this.http.get<Trade>(this.baseUrl + '/' + id);
  }

  createTrade(trade: Trade) {
    return this.http.post(this.baseUrl, trade);
  }

  updateTrade(trade: Trade) {
    return this.http.put(this.baseUrl + '/' + trade.id, trade);
  }

  deleteTrade(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

