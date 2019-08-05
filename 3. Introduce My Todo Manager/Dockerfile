## 1. Build react
FROM node:latest as node-build-file

# Create app directory
RUN mkdir -p /usr/src/app/react
COPY /MyTodoManager /usr/src/app/react

# React
WORKDIR /usr/src/app/react/
RUN export NODE_ENV=production
RUN npm install  
RUN npm run build
RUN npm run export


FROM rust:latest

# Create app directory
RUN mkdir -p /usr/src/app/static-server-rs
WORKDIR /usr/src/app/static-server-rs
COPY /static-server-rs /usr/src/app/static-server-rs
COPY --from=node-build-file /usr/src/app/react/out /usr/src/app/static-server-rs/static

WORKDIR /usr/src/app/static-server-rs/
RUN cargo install --path .

EXPOSE 3000
CMD ["static-server-rs"]
