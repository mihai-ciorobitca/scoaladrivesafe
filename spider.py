from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor
from scrapy.selector import HtmlXPathSelector
from scrapy.item import Item
from scrapy.spider import BaseSpider
from scrapy import log

class ExampleSpider(CrawlSpider):
    name = "example.com"
    allowed_domains = ["example.com"]
    start_urls = ["http://www.scoaladrivesafe.ro/"]
    rules = [Rule(SgmlLinkExtractor(allow=()), 
                  follow=True),
             Rule(SgmlLinkExtractor(allow=()), callback='parse_item', follow=True)
    ]
    def parse_item(self,response):
        self.log('A response from %s just arrived!' % response.url)