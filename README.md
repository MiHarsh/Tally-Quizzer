
# Quizzer - quizzing made easy

## Introduction



## Table of Contents 📕

- [About the Challenge](#microsoft-engage-2021)
- [Agile development methodology](#agile-development-methodology)
- [Features](#features-)
  	- [Homepage](#homepage)
  	- [Dashboard](#dashboard)
  	- [Meet](#meet)
- [Discussions](#discussions)
  - [Adding new members to a Room](#adding-new-members-to-a-room)
  - [Loading Previous Chats](#loading-previous-chats)
  - [Have-a-break Functionality](#have-a-break-functionality)
  - [User Dashboard and Meet Syncing](#user-dashboard-and-meet-syncing)
  - [Number of Rooms which could be created parallely](#number-of-rooms-which-could-be-created-parallely)
- [Future Work](#future-work)
- [Gallery](#gallery)
- [References](#references)

## Tools and Technology


The front end is created in **React.js** and **Material UI**. For creating backend, we used **Nodejs**. For the database, we used Google Firebase. We created a very flexible and versatile foundation for our codebase, so that in future its functionality could be easily extended and new agents could be easily added into it. 


## Usage or Working Demo



## Contributing Guidelines

1. This repository consists of 2 directory `frontend`,`backend`.
2. The `frontend` directory the frontent code written in React.
3. The `backend` contains webpages backend `nodejs` .
4. So, commit code to the corresponding services.

### Setting up the repository locally

1. Fork the repo to your account.

2. Clone your forked repo to your local machine:
```
git clone https://github.com/MiHarsh/Tally-Quizzer.git (https)
```
or
```
git clone git@github.com:MiHarsh/Tally-Quizzer.git (ssh)
```
This will make a copy of the code to your local machine.

3. Change directory to `Tally-Quizzer`.
```
cd Tally-Quizzer
```

4. Check the remote of your local repo by:
```
git remote -v
```
It should output the following:
```
origin	https://github.com/<username>/Tally-Quizzer.git (fetch)
origin	https://github.com/<username>/Tally-Quizzer.git (push)
```
or
```
origin	git@github.com:<username>/Tally-Quizzer.git (fetch)
origin	git@github.com:<username>/Tally-Quizzer.git (push)
```
Add upstream to remote:
```
git remote add upstream https://github.com/MiHarsh/Tally-Quizzer.git (https)
```
or
```
git remote add upstream git@github.com:MiHarsh/Tally-Quizzer.git (ssh)
```
Running `git remote -v` should then print the following:
```
origin	https://github.com/<username>/Tally-Quizzer.git (fetch)
origin	https://github.com/<username>/Tally-Quizzer.git (push)
upstream	https://github.com/MiHarsh/Tally-Quizzer.git (fetch)
upstream	https://github.com/MiHarsh/Tally-Quizzer.git (push)
```
or
```
origin	git@github.com:<username>/Tally-Quizzer.git (fetch)
origin	git@github.com:<username>/Tally-Quizzer.git (push)
upstream	git@github.com:MiHarsh/Tally-Quizzer.git (fetch)
upstream	git@github.com:MiHarsh/Tally-Quizzer.git (push)
```
## Installation or Dev Setup

### Method 1 :

#### Pre-requisites

1. Install `concurrently` by running `npm run pre-install` on terminal.

#### Steps

1. Make sure you are inside the root of the project (i.e., `./Tally-Quizzer/` folder).
2. Setup environment variables in `.env` files of all folders according to `.env.sample` files.
3. Run `npm run start-with-install` to install all the dependencies and run frontend and backend concurrently.
4. The website would then be available locally at `http://localhost:3000/`.
5. If you have already installed the dependencies, you can also run `npm run start` to run the frontend and backend concurrently.

### Method 2 : Setup services independently

#### Pre-requisites
1. Download and Install [Nodejs](https://nodejs.org/en/download)

#### Setup Node Backend

1. Run `cd .\backend` to go inside the Node.js server folder for Windows or
Run `cd backend` to go inside the Node.js server folder for Linux.
3. Run `npm install` to install all the dependencies.
4. Create a new file named `.env` and add the environment variables according to `.env.sample` file.
5. Run `npm start` to start the node backend server.

#### Setup Frontend

1. Run `cd frontend` to go inside the frontend folder.
2. Run `npm install` to install all the dependencies.
3. Create a new file named `.env` and add the environment variables according to `.env.sample` file.
4. Run `npm start` to start the frontend backend server.

# Future Work

# Gallery

|||
|:-------------------------:|:-------------------------:|
|<img width="1604" alt="login" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/login.png">  Login Page |  <img width="1604" alt="register" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/register.png"> Register |
|<img width="1604" alt="Homepage" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/home.png"> Homepage|<img width="1604" alt="dashboard" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/dashboard.png"> Dashboard |
 <img width="1604" alt="create new quiz" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/create-quiz.png">Create/Edit a Quiz|<img width="1604" alt="view-quiz-History" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/quiz-history.png"> View Quiz History|
|<img width="1604" alt="View-participants" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/view-participants.png"> Add/View Participants |  <img width="1604" alt="view statistics" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/view-stats.png"> Statistics Page|
<img width="1604" alt="view-score-card" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/score-card.png"> View Score Card| <img width="1604" alt="mail test link" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/quizmail.png"> Mail Test Link|

# Database Schema

<img width="1604" alt="db-schema" src="https://raw.githubusercontent.com/MiHarsh/Tally-Quizzer/main/images/schema.png">
