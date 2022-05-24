/**
 * Redux Initials
 */

/**
 * Challenge: Creates a reducer which controls a counter and has two actions:
 * INCREMENT: Sum a number into counter
 * DECREMENT: Subtract a number from counter
 */

const INITIAL_STATE = 0;

function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const actions = {
    INCREMENT: state + payload,
    DECREMENT: state - payload,
  };

  return actions[type] || state;
}

const store = Redux.createStore(reducer);
store.subscribe(() => {
  let state = store.getState();
  let total = document.getElementById('counter');
  total.innerHTML = state;
});

const increment = (value) => {
  store.dispatch({ type: 'INCREMENT', payload: value });
};

const decrement = (value) => {
  store.dispatch({ type: 'DECREMENT', payload: value });
};

let incrementButton = document.querySelector('#increment');
let decrementButton = document.querySelector('#decrement');
let payloadValue = document.querySelector('#value').value;
payloadValue = parseFloat(payloadValue);

incrementButton.addEventListener('click', () => increment(payloadValue));
decrementButton.addEventListener('click', () => decrement(payloadValue));
