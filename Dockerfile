FROM node:latest
# Create app directory
RUN mkdir -p /usr/src/app
# use nodemon for development
RUN npm install --global nodemon
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
# Bundle app source
COPY . /usr/src/app

EXPOSE 5000
EXPOSE 9229
CMD [ "npm", "start" ]