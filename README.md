# Chicago trip
A still-in-the-works website I am making for a trip to Chicago that my friends and I are planning.

## Visit here: [Chicago Trip](https://chicago-trip.cyclic.app/)
## Demo login:
Demo Email: demo@demo.com

Demo passsword: 12345678

![screenshot]()

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Lessons learned](#lessons-learned)
* [Improvements](#improvements)
* [Installation](#installation)

## Introduction
A group of friends and I are planning a trip to Chicago in the near future so I decided to make a website for us to share ideas of things to do on the trip. We can upvote or downvote ideas to come up with a list of activities we will all enjoy.

I can submit an activity, restaurant, or hotel idea on the left side of my profile page. The right side displays the ideas I've submitted so far.

![submit]()

On the main page, I can see ideas submitted by my friends.

![main]()

Clicking on an activity will take me to a page that displays more information on the activity and I can comment, love, like, or dislike it.

![activity page]()

## Technologies 
* Javascript
* EJS
* Bootstrap
* Node.js
* Express
* Mongo.DB
* Mongoose

## Lessons learned
As I'm still working on it I'm still learning, but so far I'm happy to be getting some experience in Bootstrap for styling, and this is my first site where users interact with each other so I'm learning about user experience and manipulation of data.

## Improvements
- [ ] Make it possible for users to add each other to a Friend List so they only see each others' suggestions
- [ ] Styling
- [ ] Include ability to share pictures
- [ ] Show which inputs are required
- [ ] Continue working on like, love, and dislike buttons

## Installation

`npm install`

### Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`

### Run

`npm start`
