## Weather app

A Weather app to know the next 5 days weather in a specific location

## Run project locally without docker

1. **npm i**
2. **npm start**


## Tech stack

1. **React Latest Version with Hooks, one of my first apps with Hooks**
   **they are good althought...its needs to get used to**
2. **ES6**
2. **Redux Thunk**

## Still to finish if this app were LIVE (production)

1. Create constatnt for endpoints in .env file. Add Docker? ...Likely
2. Add PM2 docker
3. Some tests to get a good coverage
4. To create a utils file to keep segments constants just to be cleaner, in the end we should trust the details coming from the API call. However, details change and it is not a good practice code like (< 24); which means 3 days, 8 segments by day.

4. **THE MOST IMPORTANT**

A couple of bugs left to fix

1. Related to UTC and midnight time. I know I should have handled this detail
2. The other one, it is a bit hidden, try to find out I know you will

**Just to comment, I would love to create another folder (for example "native") and start to
code a React Native app sharing same Redux used for the Web app**

Time is always a constraint :( 
