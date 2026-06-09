# React + Vite


# Countdown Timer

A React-based countdown timer application that allows users to start, pause, and resume a countdown. The timer updates in real time and automatically handles transitions between hours, minutes, and seconds.

## Features

* Start countdown timer
* Pause timer at any point
* Resume timer from the paused state
* Automatic rollover of seconds to minutes and minutes to hours
* Stops automatically when the countdown reaches zero
* Responsive and clean user interface

## Tech Stack

* React
* JavaScript (ES6+)
* React Hooks (`useState`, `useEffect`)
* CSS

## Implementation Details

The application uses React state to manage the timer values and control the timer lifecycle.

### State Management

* `hours` – stores remaining hours
* `minutes` – stores remaining minutes
* `seconds` – stores remaining seconds
* `started` – tracks whether the timer is currently running

### Timer Logic

* `setInterval` is used to decrement the timer every second.
* `useEffect` manages interval creation and cleanup.
* `clearInterval` prevents memory leaks and ensures only one interval runs at a time.
* The timer automatically updates minutes and hours when seconds or minutes reach zero.

### Learning Objectives

This project demonstrates:

* React component architecture
* State management with Hooks
* Side-effect handling with `useEffect`
* Interval management and cleanup
* Conditional rendering
* Basic CSS layout using Flexbox

## Running the Project

```bash
npm install
npm run dev
```

## Future Improvements

* User-defined timer duration
* Reset functionality
* Multiple timer support
* Audio notification on completion
* Local storage persistence
