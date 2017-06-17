import { sanitizeObject, sanitizeString } from './sanitize';
describe('sanitizes strings', () => {
  it('sanitizes only strings', () => {
    expect(sanitizeString(7)).toEqual(7);
    expect(sanitizeString(7)).not.toEqual('7');
    expect(sanitizeString('<p>Hello, world</p>')).toEqual('Hello, world');
  });
  it('strips html tags', () => {
    expect(sanitizeString('<p>Hello, <strong>world</strong></p>')).toEqual('Hello, world');
  });
})
describe('sanitizing strings in objects', () => {
  it('returns object with same keys', () => {
    const input = {
      ID: 1816,
      content: "<p>As a designer, I find it difficult <strong>not</strong> to judge a book by its cover.</p>",
      link: "https://quotesondesign.com/jordan-manigo/",
      title: "Jordan Manigo",
    }
    const expectedKeys = Object.keys(input);
    expect(Object.keys(sanitizeObject(input))).toEqual(expectedKeys);
  });
});
