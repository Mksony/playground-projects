import jsonp from 'jsonp';

import { sanitizeObject } from './utils/sanitize';
/*
Sample Initial Response
ID: 1816
content :"<p>As a designer, I find it difficult <strong>not</strong> to judge a book by its cover.</p>"
link:"https://quotesondesign.com/jordan-manigo/"
title: "Jordan Manigo"
TODO: This whole construct needs a refactor,
better proxy api response through own server and get rid of this ugly jsonp XSS thing
*/

const POST_URL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
export const getRandomQuote = () => new Promise((resolve, reject) => {
  jsonp(POST_URL, {param: '_jsonp'}, (err, data) => {
    if (err) {
      return reject(err);
    }
      const [quote] = data;
      return resolve(sanitizeObject(quote));
  });
});