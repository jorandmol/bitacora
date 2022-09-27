# syntax=docker/dockerfile:1

FROM node:18.9.1

# set environment variable to production
ENV NODE_ENV=production

# create the working directory
WORKDIR /app

# copy package.json and install (production) dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

# get the source code
COPY . .