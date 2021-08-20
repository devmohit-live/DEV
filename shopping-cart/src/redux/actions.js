export const addToCart = (val) => {
  return {
    type: "ADD_TO_CART",
    payload: val,
  };
};
export const removeFromCart = (val) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: val,
  };
};
