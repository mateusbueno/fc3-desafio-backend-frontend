FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENV PORT=3001
EXPOSE 3001

CMD npm run start
