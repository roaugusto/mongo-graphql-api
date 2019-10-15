FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . . 

RUN apt-get update && apt-get install netcat

EXPOSE 4000

CMD ["npm", "start"]