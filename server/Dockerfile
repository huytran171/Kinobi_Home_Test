FROM node:15.8.0
RUN mkdir -p /usr/app
COPY package.json ./
WORKDIR /usr/app
RUN yarn --frozen-lockfile
