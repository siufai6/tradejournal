import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddTradeComponent} from "./add-trade/add-trade.component";
import {ListTradeComponent} from "./list-trade/list-trade.component";
import {EditTradeComponent} from "./edit-trade/edit-trade.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-trade', component: AddTradeComponent },
  { path: 'list-trade', component: ListTradeComponent },
  { path: 'edit-trade', component: EditTradeComponent },
  //{path : '', component : LoginComponent}
  {path : '', component : ListTradeComponent}
];

export const routing = RouterModule.forRoot(routes);
