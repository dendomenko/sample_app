FROM node:latest

ENV APP_CLIENT /client
RUN mkdir $APP_CLIENT
WORKDIR $APP_CLIENT
ADD package.json $APP_CLIENT/
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g webpack
RUN npm install
# RUN npm install
# ADD Gemfile* $APP_HOME/
ADD . $APP_CLIENT

# EXPOSE 8080
CMD [ "npm", "start","yarn" ]