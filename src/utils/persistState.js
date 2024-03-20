const TMRZ_STATE = "TMRZ_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TMRZ_STATE);
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    // Reset the time value of each timer to 0 when loading state
    const initialState = {
      value: parsedState.value.map(timer => ({ ...timer, time: 0 })),
    };
    return initialState;
  } catch (err) {
    return undefined;
  }
};

// Save State
export const saveState = (state) => {
  try {
    // convert the state from JSON, into a string
    const serializedState = JSON.stringify(state)
    // save the state to local storage
    localStorage.setItem(TMRZ_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}