FROM node:8

ADD package.json /package.json

ENV NODE_PATH=src/
ENV CHOKIDAR_USEPOLLING=true
ENV PATH="$PATH:/node_modules/.bin"
RUN npm install

WORKDIR /app
ADD . /app

EXPOSE 3000

CMD [ "npm", "start" ]
