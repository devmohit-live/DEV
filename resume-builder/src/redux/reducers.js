import { SET_USER, SET_TEMPLATE } from "./constants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const templateReducer = (state = null, action) => {
  switch (action.type) {
    case SET_TEMPLATE:
      return action.payload;
    default:
      return state;
  }
};

let intialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  degree: "",
  year: "",
  cgpa: "",
}

export const detailsReducer = (state=intialState, action)=>{

  switch (action.type) {
    case "SET_DETAILS":
      let ob = {
        ...state, ...action.payload
      }
      return ob;

    default:
      return state;
  }

}
