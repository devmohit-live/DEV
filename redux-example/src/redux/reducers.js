export const counterReducer = (count = 10, action) => {
  if (action.type === "INCREMENT") {
    count = count + action.payload;
  } else if (action.type === "DECREMENT") {
    count = count - 1;
  }
  return count;
};

export const authReducer = (state = false, action) => {
  if (action.type === "LOGIN") {
    state = true;
  } else if (action.type === "LOGOUT") {
    state = false;
  }
  return state;
};
