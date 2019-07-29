## Weather app

A Weather app to know the next 6 weather days in a specific location

## Run project locally without docker

1. **npm i**
2. **npm start**


## Tech stack

1. **React Latest Version with Hooks, one of my first apps with Hooks**
   **they are good althought...its needs to get used to**
2. **ES6**
2. **Redux Thunk**

## Still to finish if this app were LIVE (production)

1. Wrap rows in a button to get on hover and clicking easily
2. Get first card selected by default...no time to do it :(
2. Create constatnt for endpoints in .env file. Add Docker? ...Likely
3. Some tests to get a good coverage
4. To create a utils file to keep segments constants just to be cleaner, in the end we should trust the details coming from the API call. However, details change and it is not a good practice code like (< 24); which means 3 days, 8 segments by day.

5. **THE MOST IMPORTANT**

A couple of bugs left to fix

1. Try to find out I know you will, (In the first load (Just in the first page) clicking on cards dont get values in BarChart updated. 
   It is easy to fix :)
2. Last page show 2 cards, it should not. It is one of my first experience with React Hooks and I realised it causing multiple rendering and moving card twice after clicking the first right arow.
I should have developed with classes. I was very ambitious, with no time to investigate further :(

**Just to comment, I would love to create another folder (for example "native") and start to
code a React Native app sharing same Redux used for the Web app**

Time is always a constraint :( 
