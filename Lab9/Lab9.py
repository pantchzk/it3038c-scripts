import json;
import requests;
r = requests.get("http://localhost:3000");

data=r.json();

for x in data:
	print(x['name'] + " is the color " + x['color'])
