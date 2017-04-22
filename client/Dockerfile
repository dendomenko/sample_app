FROM node:latest


ENV APP_CLIENT /client
RUN mkdir $APP_CLIENT
WORKDIR $APP_CLIENT
RUN npm config set registry http://registry.npmjs.org/

# ADD package.json $APP_HOME/
RUN yarn install
RUN npm install webpack -g 


# VOLUME ["/client/"] 
ADD . $APP_HOME



# ENV APP_CLIENT /client
# RUN mkdir $APP_CLIENT
# WORKDIR $APP_CLIENT/
# ADD package.json $APP_CLIENT/
# RUN npm config set registry http://registry.npmjs.org/
# RUN npm install -g webpack
# RUN npm install
# RUN yarn install
# RUN npm install
# ADD . $APP_CLIENT

# EXPOSE 8080
 CMD [ "npm start","bash -c ls" ]