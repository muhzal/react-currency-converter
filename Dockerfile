FROM node:8

WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock ./yarn.lock
RUN yarn
ADD . .

EXPOSE 3000
