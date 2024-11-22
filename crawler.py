url = "https://scoaladrivesafe.ro/"

from requests import get
from bs4 import BeautifulSoup

html = get(url).text
soup = BeautifulSoup(html, 'html.parser')

with open('api/views/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))