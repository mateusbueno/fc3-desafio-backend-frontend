FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@7.6.0

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start:dev
