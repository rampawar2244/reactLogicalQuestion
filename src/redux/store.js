import { createStore } from "redux";

const dummyReducer = () => {
  console.log("evr is fine with store");
  return 100;
};

const store = createStore(dummyReducer);

export default store;
