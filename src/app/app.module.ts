import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { AddTradeComponent } from './add-trade/add-trade.component';
import { EditTradeComponent } from './edit-trade/edit-trade.component';
import { ListTradeComponent } from './list-trade/list-trade.component';
import { LoginComponent } from './login/login.component';
import {TradeService} from "./service/trade.service";
import {AuthenticationService} from "./service/auth.service";
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTradeComponent,
    EditTradeComponent,
    ListTradeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [AuthenticationService, TradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
