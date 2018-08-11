export class Trade {
    id: number;
    user: string;
    code: string;
    timeframe: string;
    strategy: string;
    open_review: string;
    open_at: number;
    qty: number;
    open_date: Date;
    target: number;
    stoploss: number;
    max_loss: number;
    close_at: number;
    close_date: Date;
    qty_close: number;
    pl: number;
    close_review: string;
    mistakes: string;
}

