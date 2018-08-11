import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TradeService} from "../service/trade.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';

const timeframes = [ 'WEEKLY', 'DAILY', 'HOURLY'];

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})

export class AddTradeComponent implements OnInit {
  timeframes : string[] =['Weekly', 'Daily', 'Hourly'];
  constructor(private formBuilder: FormBuilder,private router: Router, private tradeService: TradeService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      user: ['', Validators.required],
      code: ['', Validators.required],
      market: ['', Validators.required],
      timeframe: ['', Validators.required],
      strategy: ['', Validators.required],
      open_review: ['', Validators.required],
      open_at: ['', Validators.required],
      qty: ['', Validators.required],
      open_date: ['', Validators.required],
      target: ['', Validators.required],
      stoploss: ['', Validators.required],
      max_loss: ['', Validators.required],
      close_at: ['', Validators.required],
      qty_close: ['', Validators.required],
      pl: ['', Validators.required],
      close_review: ['', Validators.required],
      mistakes: ['', Validators.required]
    });

  }

  onSubmit() {
    this.tradeService.createTrade(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-trade']);
      });
  }

}

