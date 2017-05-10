import jsonp from 'jsonp';
import striptags from 'striptags';
import {AllHtmlEntities as Entities} from 'html-entities';
/*
Sample Initial Response
ID: 1816
content :"<p>As a designer, I find it difficult <strong>not</strong> to judge a book by its cover.</p>"
link:"https://quotesondesign.com/jordan-manigo/"
title: "Jordan Manigo"
TODO: This whole construct needs a refactor,
better proxy api response through own server and get rid of this ugly jsonp XSS thing
*/
const entities = new Entities();
const sanitizeString = (input) => {
  if (typeof input === 'string') {
    return entities.decode(striptags(input))
  }
  return input;
};
const sanitizeResponse = (response) => Object.keys(response).reduce((prev, curr) => {
  prev[curr] = sanitizeString(response[curr]);
  return prev;
}, {})

const POST_URL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
export const getRandomQuote = () => new Promise((resolve, reject) => {
  jsonp(POST_URL, {param: '_jsonp'}, (err, data) => {
    if (err) {
      reject(err);
    } else {
      const [quote] = data;
      resolve(sanitizeResponse(quote));
    }
  });
});