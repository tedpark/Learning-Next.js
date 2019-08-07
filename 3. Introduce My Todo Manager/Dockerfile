## 1. Build react
FROM node:latest as node-build-file

# Create app directory
RUN mkdir -p /usr/src/app/react
COPY /MyTodoManager /usr/src/app/react

# React
WORKDIR /usr/src/app/react/
RUN npm install  
RUN npm run build
RUN npm run export

WORKDIR /usr/src/app/react/out
EXPOSE 3000
CMD [ "npm", "start" ]

