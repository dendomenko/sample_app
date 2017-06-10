FROM node:latest
MAINTAINER Arthur <nesterenko19@gmail.com>


ENV APP_CLIENT /client
RUN mkdir -p $APP_CLIENT
WORKDIR $APP_CLIENT

# ENV PATH $APP_CLIENT/node_modules/.bin:$PATH
COPY package.json $APP_CLIENT/

RUN yarn global add webpack --ignore-scripts --unsafe-perm  && yarn add global flow-bin
RUN yarn install



COPY . $APP_CLIENT
# COPY . ../node_modules

ADD . $APP_CLIENT
WORKDIR $APP_CLIENT

RUN ls ..
RUN ls
