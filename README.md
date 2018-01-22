Tornado Angular Single Page Application
======================

![Screenshot](https://image.ibb.co/d9NVUG/1.png)
![Screenshot](https://image.ibb.co/mPyR3b/2.png)

### Resources
+ Angular JS, 1.6.7
+ Tornado Web Server
+ Bulma CSS framework
+ Fontawesome Icons

### About

Single Page application for serving people data from ```storage/people.json``` file.
Files and data are served using Tornado Web Server (Python) and
User Interface is built using Angular JS and Lightweight Bulma CSS framework.

By clicking on selected Person "view" button you can open detailed Person Card.

The server logs the following front-end events:
+ the user visits the page;
+ the user selects an user card;
+ the user hovers over an avatar;

## Requirements

+ Python 3.3.x

## Installation

+ Clone Repository
+ `npm install`
+ `pip install -r requirements.txt`
+ `cp .env.example .env`
+ `npm run build`

## Development

+ Run Angular `npm start`
+ Run Tornado `python ./app.py --debug`
+ Visit `localhost:8080`

## Production

+ `npm run build`
+ Run Tornado Server `python ./app.py`
+ Visit `localhost:8888`

## Todo
- [ ] Write Angular JS tests
