

<h1 align="center">
    <img alt="Relay Real World" title="#Relay Real World" src=".gitkeep/screen.png" />
</h1>

<h1 align="center">
  🌎 <a href="#"> Relay Real World </a>
</h1>

<h3 align="center">
    Boilerplace setup Fullstack with Relay, Nodejs, MongoDB, SSR Razzle, React!
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/tgmarinho/relay-realworld?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tgmarinho/relay-realworld">

  <a href="https://www.twitter.com/tgmarinho/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2Frelay-realworld">
  </a>
  
  <a href="https://github.com/tgmarinho/relay-realworld/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tgmarinho/relay-realworld">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/tgmarinho/relay-realworld/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/tgmarinho/relay-realworld?style=social">
  </a>

  <a href="https://tgmarinho.com">
    <img alt="tgmarinho" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

</p>


<h4 align="center"> 
	 Status: Building
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#user-content-license">License</a>

</p>


## About

👨🏻‍💻 Project with basic to start with Node.js, React, Typescript, Webpack, Monorepo

---

## Features

- [x] Auth
   - [x] Sign In
   - [x] Sign Up
   - [ ] Recover password

- [x] Feed
   - [x] Post
   - [x] Comment
   - [x] Like

---


<!-- 
### Mobile

<p align="center">
  <img alt="The Relay Realworld" title="#The Relay Realworld" src="./assets/home-mobile.png" width="200px">

  <img alt="The Relay Realworld" title="#The Relay Realworld" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="The Relay Realworld" title="#The Relay Realworld" src="./assets/web.svg" width="400px">

  <img alt="The Relay Realworld" title="#The Relay Realworld" src="./assets/sucesso-web.svg" width="400px">
</p> -->

---

## How it works

This project is divided into monorepo packages:

packages - contains packages and code that make workshop exercises possible

- babel - shared babel config
- babelweb - shared babel config for web with react fast refresh
- graphql - graphql utilities to make building graphql servers with graphql-js faster
- relay - relay utilities
- route - custom routing solution until react-router supports render as you fetch
- server - graphql server used on demo and workshop exercises
- test - test utilities to make tests easy
- ui - mini design system to be used on demo and workshop exercises
- web - demo app - mini social network
- webpack - shared webpack config for the demo and workshop exercises


### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Project


```bash

# Clone this repository
git clone git@github.com:tgmarinho/relay-realworld.git

# Access the project folder cmd/terminal
cd relay-realworld

# Install the dependencies
yarn install


## Run mongo db locally with Docker or use some instance from Mongo Atlas

#### Mongo on Docker
docker run -d -p 27017:27017 --name mongo-server-relay -d mongo:latest

### Docker basic commands

# list all running containers
docker ps
# list all containers (including the exited ones)
docker ps -a
docker stop mongo-server-relay
#stop the container
docker start mongo-server-relay
#start the container
docker rm mongo-server-relay
#delete the container to free disk space
docker image ls
#list all downloaded images
docker rmi IMAGE_NAME:TAG
#remove image from your computer to free disk space


# Setup Environment Variables
yarn copy-envs   

# Replace the value
PORT=7500
MONGO_URI=mongodb://localhost:27017/basic-relay

# Run Build Server
yarn build:server

# Run Relay compiler
yarn relay

# Run update schema
yarn update-schema

# Run the server
yarn server

# Run the frontend App
yarn w && yarn web

# The server will start at port:7500 - go to http://localhost:7500
# The web will start at port:8007 - go to http://localhost:8007/

```


---

## Author

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt="Thiago Marinho"/>
 <br />
 <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat"></a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@tgmarinho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/tgmarinho) [![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

---

## License

This project is under the license [MIT](./LICENSE).

Forked from [sibelius/relay-realworld](https://github.com/sibelius/relay-realworld) and contributing by Thiago Marinho 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/tgmarinho/)




