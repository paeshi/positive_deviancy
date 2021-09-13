import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  user: "" || null,
  isFetching: false,
  error: false,
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    case "DELETE_START":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "DELETE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "DELETE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Reducer"],
};

const rootReducer = Reducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
