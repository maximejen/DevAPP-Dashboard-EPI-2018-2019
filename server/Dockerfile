FROM node:10.12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

EXPOSE 4466

CMD [ "node", "index.js" ]
