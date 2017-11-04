FROM node:8.1.0

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN apt-get update && apt-get install nano

USER node
RUN mkdir ~/.npm-global \
  && mkdir ~/app \
  && npm install -g typescript ts-node forever nodemon mocha

WORKDIR /home/node/app

ADD package.json package-lock.json ./
RUN npm install
# CMD npm run test
