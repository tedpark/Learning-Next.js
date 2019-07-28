# Learning-Next.js

### 1. Introduce Myself
Prerequisites

https://github.com/EmaSuriano/gatsby-starter-mate

Just open http://localhost:8000.

### 2. Introduce My Start Company
Prerequisites

```
yarn
yarn dev
```
Just open http://localhost:3000.
### 3. Introduce My Todo Manager
Prerequisites

```
yarn
yarn dev
```
Just open http://localhost:3000.


### 4. KoaJs-MongoDB-JWT-StarterKit

### Prerequisites
What things you need to install the software and how to install them
* MongoDB local server
* You have to Edit Passport Social id (Ex: clientId:... clientSecret:...) in /utils/auth.js


### Starting App
```
yarn 
yarn start    or   yarn dev  
```
This will start the application and Connect MongoDB. 
Just open http://localhost:3000.


### Available strategies

* local
* google
* twitter
* facebook
* linkedIn


### Routes

```
//Social Oauth Login
http://localhost:3000/users/auth/google/callback
```

```
//GET products
http://localhost:3000/products
```



### Docker
##### Build
```
sudo docker build -t koajsImg .
```

##### Run (Remove Instance)
```
sudo docker run -it --rm -p 3000:3000 --name runningKoajs koajsImg
```

##### Run (Background Daemon Mode)
```
sudo docker run -d --rm -p 3000:3000 --name runningKoajs koajsImg
```