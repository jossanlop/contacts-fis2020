FROM node:9-alpine

WORKDIR /app

copy package.json .
copy package-lock.json .

RUN npm install

COPY index.js .

expose 3000

CMD npm start