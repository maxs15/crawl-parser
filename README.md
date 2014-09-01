# Crawl parser

Connect middleware to easily allow search engine, social medias (facebook, twitter…) to read your page.

## How does it work

It detects if it is a bot (facebook, twitter) or check the **_escaped_fragment_** parameter is present.

## How to use

```js  
var crawlParser = require('crawl-parser');

/* 
 * Return all the corresponding meta tags
 * Parameters:
 * 		req: Express request
 *		options: {
 *			service: String -> Requester name (facebook, twitter …) or engine if unknown
 *			lang: String -> Locale (Only available with FB for now)
 *		}
 */  

app.use(crawlParser(function(req, options, cb) {

	return cb({
		'title': 'Crawl parser example',
    	'description': '',
    	// Facebook
    	'og:url': '',
    	'og:title': '',
    	'og:description': '',
    	'og:image': '',
    	'fb:app_id': '',
    	// Twitter
    	'twitter:site': ''
	});

});  
```  

## License

(The MIT License)

Copyright (c) 2013 Maxime Mezrahi

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.