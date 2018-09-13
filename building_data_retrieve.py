# building_data = "https://data.opendatanetwork.com/resource/igjy-7nxp.json"

# import urllib, json
# url = building_data
# response = urllib.urlopen(url)
# data = json.loads(response.read())
# print(data)

#Importing modules
import json
import requests


response = requests.get('https://data.opendatanetwork.com/resource/igjy-7nxp.json')
house_data = json.loads(response.text)

print('house_data')


# # Open the URL and the screen name
# url = "https://data.opendatanetwork.com/resource/igjy-7nxp.json"

# # This takes a python object and dumps it to a string which is a JSON representation of that object
# data = json.load(urllib2.urlopen(url))

# #print the result
# print(data)