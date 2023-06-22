# CRUD USING NODE, EXPRESS AND MY SQL

![articleocw-57e139c25d2be](https://user-images.githubusercontent.com/41265756/162416397-909615a2-e4e5-4f1b-b598-3ad5cc9eb6f8.png)

## About
This project was created to study the concepts of CRUD operations using node, express and mysql.

## Prerequisite
Installation of: 
- Docker
- Docker compose
- Node

## Technologies
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySql](https://www.mysql.com/)

## How To Use
```
# Clone this repository
$ git clone https://github.com/AyeshaKhan07/CRUDNodeMySql.git

# Go into the repository
$ cd CRUDNodeMySql

# Install dependencies
$ npm install

# Install mysql using docker
$ cd database
$ cd my_sql
$ docker-compose up -d

# Create .env file and copy the content of sample.env to .env

# Run the app
$ node index.js
```

If you are seeing these two lines logged on the console, congratulatons your server is up successfully with mysql connected.

![image](https://user-images.githubusercontent.com/41265756/162419294-8b64fb3f-6bec-4007-9d96-72371eab9ec9.png)

## Populate The Data
Dummy data can be populated by seeder.js file. After installing mysql using docker and start the container, run the following command to populate the data:
```
node seeder.js
```

## To Conclude
The server is up with mysql connected, now you can make API calls using postman or any other platform.

## Author
@AyeshaKhan07
