FROM node:10.1.0

# Environment Config
ENV APP_HOME /opt/app

# Install Required dependencies
RUN apt-get update -qq && apt-get install -y build-essential
RUN npm install -g sequelize-cli@4.0.0

# Bootstrap Application
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .

EXPOSE 3000
