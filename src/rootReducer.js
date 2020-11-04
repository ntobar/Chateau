import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import chatReducer from "./slices/chat/chatSlice2";
// import counterReducer from './features/counter/counterSlice';
console.log({ chatReducer });
export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    chat: chatReducer,
  });
}
