FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
