# My Number Game with React

Check it out LIVE: https://studio-ackerman.com/

## Goals

- [ ] Create a working game. Based on quiz 'Slagalica' and it's game 'Moj Broj'
- [ ] It should start with rendering top number with component that uses `useEffect` and setInterval function.
- [ ] Track the state of the game with useContext hook and use it as a state menagment tool for the whole app.
- [ ] When number is clicked display it in the result field and disable it to prevent double clicking until its deleted from result field.
- [ ] Have a 'restart' button start a new game, disabled at the start becouse it doesnt have anything to put in default state.
- [ ] Have a section with 'confirm' button and 'delete' button, which user control to manipulate given 6 numbers and calculate result.
- [ ] Have a section with basic mathematical operations to combine them with generated numbers and reach the goal.
- [ ] Have error handling for confirming result field that cannot be calculated (empty, finishing with mathematical operation, not correct number of front and back bracets)
- [ ] If the result field is errorless and it doesnt violate any rules, calculate result and compare it to a target number.

## Stretch Goals

- [ ] If field is error prone add nice UI touch, snackbar from library Material-UI and modify it to match the game error props.
- [ ] Implement a timer component that counts from 0 to 100 (60 seconds), when it reach 100 stop the game, pop a modal to play a new game.
- [ ] Display 3 types of modals after confirm button is clicked, one for correct result under 30 seconds (golden trophy), correct result before timer runs out (silver trophy) and incorrect result.
- [ ] Disable the reset button and delete button when they dont have reason to be clicked.
- [ ] Display how to play button with modal that is accesed in the top left corner of the board.
- [ ] How to play button is displaying modal with tips that explain how to play the game.
- [ ] Add fullscreen button (top-right-corner) that does exactly that, transforms browser game into fullscreen and switches to icon that on click exits fullscreen.
- [ ] Add smooth react-spring animations to all modals.
- [ ] Add Link to github repo and github profile.

## Install and Use

To run and edit the project, clone the project to your computer, `cd` into the project directory and follow the instructions below for your javascript pacakge manager of choice.

### yarn

In the project directory run `yarn install` to install the depenencies, and `yarn start` to star the development server. It should open a browser tab to `localhost:3000`.

### npm

In the project directory run `npm install` to install the depenencies, and `npm start` to star the development server. It should open a browser tab to `localhost:3000`.
