# syntax=docker/dockerfile:1

FROM node:18.9.1 as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

FROM base as test
RUN npm ci
COPY . .

FROM base as prod
ENV NODE_ENV=production
RUN npm ci --production
COPY . .