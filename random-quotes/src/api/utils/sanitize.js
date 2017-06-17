import striptags from 'striptags';
import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();
export const sanitizeString = (input) => {
  if (typeof input === 'string') {
    return entities.decode(striptags(input))
  }
  return input;
};
export const sanitizeObject = (response) => Object.keys(response).reduce((prev, curr) => {
  prev[curr] = sanitizeString(response[curr]);
  return prev;
}, {})
