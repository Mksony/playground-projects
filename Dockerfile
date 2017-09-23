FROM node:8.5.0
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

EXPOSE 5000
EXPOSE 9229
CMD [ "npm", "start" ]