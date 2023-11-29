import { combineReducers } from "redux";
import themeUsersReducer from "./themeUsers/reducers";
import authReducer from "./authentication/reducers";
import meReducer from "./me/reducers";
import ChangeLayoutMode from "./themeLayout/reducers";
import { headerSearchReducer } from "./headerSearch/reducers";

const rootReducers = combineReducers({
  currentUser: meReducer,
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  auth: authReducer,
  ChangeLayoutMode,
});

export default rootReducers;
