**[Check it live here](https://xenodochial-bell-c0b4c5.netlify.app/)**

## Final Product

![](shoppies.gif)

## Project Stack

- React
- TypeScript
- CSS (grid, animation, variables, etc.)

## Project Features

- Users can search movies by name (OMDB API)
- Search action is debounced by 500 ms using Lodash debounce
- Users can nominate their favorite movies
- Users cannot nominate more than 5 movies
- Users can delete movies that are already nominated from the nominated movie list by clicking on the delete button

## Running the project

1. Obtain an api key from http://www.omdbapi.com/.
1. Create a file named `.env` in the root of the project
1. Add this to the `.env` file: `REACT_APP_OMDB_API_KEY=[your api key from step 1]`
1. `yarn`
1. `yarn start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
