#This webscraper takes info from the Binding of Isaac wiki (which is a rogue-like game) and gathers the name of the linked item, the quality (represented by a number of 0-4) and the entity ID (which can be used in the in-game console to spawn the item).

from bs4 import BeautifulSoup
import requests, re

r = requests.get('https://bindingofisaacrebirth.fandom.com/wiki/Monstro%27s_Tooth').content
soup = BeautifulSoup(r, 'html.parser')

span = soup.find('h1', {"class":"page-header__title"})
itemName = (span.text).strip()

span = soup.find('b')
quality = span.text

span = soup.find('code')
entity = span.text

print(itemName + " has a quality number of " + quality + " and an entity ID of " + entity)
