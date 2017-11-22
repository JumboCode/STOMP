# STOMP

All details for development and deployment will be listed here.

# Development
## Set up Development Environment
1. Clone the web app repo: ```git clone https://github.com/eric-snyder/STOMP.git```.
2. Install [Homebrew](http://brew.sh/).
3. Install Node using Homebrew, which will include node package manager.
4. Install application dependencies: ```npm install```.  This will install all of the packages listed in ```package.json```.

## Run Application for Development
1. Enter the following into the command line: ```npm run start:dev```.
2. The application should be running on ```localhost:8080``` in your web browser.
3. The application can be stopped with CTRL-C on a Mac.

## Databases
create_local_db.js first time setup:
1. Install mongoDB
2. Start mongoDB in a separate terminal window 
run `mongod`
3. Once mongoDB begins waiting for connections:
`node create_local_db.js` (only need to do this once!)
4. You should see the following output: 
`User collection created with 4 users`
`Item collection created with 5 items`
5. Start the mongo shell:
run `mongo`
6. Switch to the new DB:
`> use stompdb`
7. (Optional) View the stored data!
`> db.users.find()`
`> db.items.find()`
8. (Optional) If something goes wrong:
clear collection via `db.users.remove({})` or `db.items.remove({})`
delete db itself via `db.dropDatabase()`
9. Quit mongo & mongod when you are done

## Deployment

# Application Architecture

## Page Structure

## Routing

## Email Server

### Email Account Verification

## Infrastructure

# Authentication

# Design and Style

# Testing
