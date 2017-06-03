FROM node:latest
MAINTAINER Arthur <nesterenko19@gmail.com

ENV APP_CLIENT /client
RUN mkdir $APP_CLIENT
WORKDIR $APP_CLIENT
ENV PATH=$APP_CLIENT/node_modules/.bin:$PATH
COPY package.json $APP_HOME/

RUN yarn global add webpack --ignore-scripts --unsafe-perm  && yarn add global flow-bin &&yarn

COPY . $APP_CLIENT
CMD yarn start
EXPOSE 8080