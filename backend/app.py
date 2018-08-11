from flask import Flask, jsonify, Response, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_cors import CORS, cross_origin
from models import Trade

# mongodb config
#DB_HOST_MONGO = 'mongodb://db:27017/'
DB_HOST_MONGO = 'mongodb://localhost:27017'
DB_NAME_MONGO = "journals"
DB_COLLECTION_MONGO = "trades"
DB_USERNAME = 'root'
DB_PASSWORD = 'admin'

# mongodb connection
'''
mongo_client = MongoClient(DB_HOST_MONGO)
mongo_client[DB_NAME_MONGO].authenticate(DB_USERNAME, DB_PASSWORD, mechanism='SCRAM-SHA-1')
db = mongo_client[DB_NAME_MONGO]
collection = db[DB_COLLECTION_MONGO]
'''

# start flask app
app = Flask(__name__)
app.config['MONGO_DBNAME'] = DB_NAME_MONGO
app.config['MONGO_URI'] = '{0}/{1}'.format(DB_HOST_MONGO, DB_NAME_MONGO)
print(app.config['MONGO_URI'])

mongo = PyMongo(app)
collection = mongo.db.trades

@app.route('/api/trade/<trade_id>', methods=['GET'])
@cross_origin()
def get_single_trade(trade_id):
    trade = collection.find_one({"_id": ObjectId(trade_id)})
    return dumps(trade)

@app.route('/api/trade', methods=['GET'])
@cross_origin()
def get_all_trades():
    trades = collection.find()
    return dumps(trades)

@app.route('/api/trade', methods=['POST'])
@cross_origin()
def create_trade():
    trade = request.get_json()
    trade_id = collection.insert_one(trade).inserted_id
    print(trade)
    return dumps(collection.find_one({"_id": trade_id}))

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=8081)
