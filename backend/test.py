import json

# Create sample classes
class Address(object):
    def __init__(self, city=None, province=None):
        self.city = city 
        self.province = province

    def to_json(self):
        return json.dumps(self.__dict__)

    @classmethod
    def from_json(cls, json_str):
        json_dict = json.loads(json_str)
        return cls(**json_dict)


a = Address('a','b')
j = a.to_json()
print(j)

b=Address.from_json( j)
print(b.city)
print(b.province)
a.city='x'
print(a.city)

