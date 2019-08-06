## 1. Build react
FROM node:latest as node-build-file

# Create app directory
RUN mkdir -p /usr/src/app/react
COPY /MyTodoManager /usr/src/app/react

# React
WORKDIR /usr/src/app/react/
RUN export NODE_ENV=production
RUN npm install -g serve
RUN npm install  
RUN npm run build
RUN npm run export

EXPOSE 3000
WORKDIR /usr/src/app/react/out
CMD serve -p 3000

