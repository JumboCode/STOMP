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
First time setup:
1. Install mongoDB
2. In a separate terminal window, run:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`mongod`
3. Wait for the following message to appear in the mongod terminal window:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`YYYY-MM-DD*stuff* I NETWORK  [initandlisten] waiting for connections on port 27017`
3. In your main terminal window, run the following to insert a dummy user/item into the DB:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`node insert_user.js`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`node insert_item.js`<br/>
&nbsp;&nbsp;(Optional) If the above does not work, install mongoUtil via `npm install mongoUtil` and try again
4. You should see the following output:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`Successfully added new user info`
5. If you run the same commands (step 3) again, you should get:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`This email has already been registered`
6. Quit mongod when you are done via ctrl-C

To look at the current DB contents:
1. Start mongoDB in a separate terminal window:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;run `mongod`
2. Start the mongo shell:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;run `mongo`
3. Switch to the new DB:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`> use stompdb`
4. View the stored data!<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`> db.users.find()`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`> db.items.find()`
5. (Optional) If something goes wrong:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;clear collection via `db.users.remove({})` or `db.items.remove({})`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;delete db itself via `db.dropDatabase()`
6. Quit mongo & mongod when you are done

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
