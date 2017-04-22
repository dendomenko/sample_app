FROM ruby:2.2.2

RUN apt-get update -qq && apt-get install -y build-essential

# for postgres
RUN apt-get install -y libpq-dev

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# for capybara-webkit
RUN apt-get install -y libqt4-webkit libqt4-dev xvfb

# for a JS runtime



# RUN wget -qO- https://deb.nodesource.com/setup_7.x |  bash -
# RUN apt-get install -y nodejs

#RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
#RUN apt-get install -y yarn
#RUN apt-get install -y nodejs
#RUN apt-get install -y nodejs-legacy
#RUN apt-get install -y npm


# ADD package.json $APP_HOME/

# RUN rm -rf node_modules && npm install && npm cache clean && rm -rf ~/tmp/*
# RUN npm install -g yarn
# RUN npm install -g webpack

#RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list


#RUN yarn install




ENV APP_HOME /sample_app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle update && bundle install



ADD . $APP_HOME