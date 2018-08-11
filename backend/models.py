from bson.objectid import ObjectId

class Trade(object):
    """A class for storing Trade related information"""

    def __init__(self, trade_id=None, user=None, code=None, market=None, timeframe=None,\
                 strategy=None, description=None, open_at=0.0, qty=0, open_date=None, \
                target=0.0, stoploss=0.0, max_loss=0.0, close_at=0.0, qty_close=0, pl=0.0, review=None):        
        if trade_id is None:
            self._id = ObjectId()
        else:
            self._id = trade_id
        self.user = user
        self.code = code
        self.market = market
        self.timeframe = timeframe
        self.strategy = strategy
        self.description = description
        self.open_at = open_at
        self.qty = qty
        self.open_date = open_date
        self.target = target
        self.stoploss = stoploss
        self.max_loss = max_loss
        self.close_at = close_at
        self.qty_close = qty_close
        self.pl = pl
        self.review = review


    def to_json(self):
        return json.dumps(self.__dict__)

    @classmethod
    def from_json(cls, json_str):
        json_dict = json.loads(json_str)
        return cls(**json_dict)


