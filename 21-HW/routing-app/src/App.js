import { Switch } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { appRoutes } from "./routes/index";
import { UserForm } from "./components/user-form";

import "./App.css";
import React, { useCallback, useReducer } from "react";
import { Route } from './components/route'

export const Store = React.createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

// const action = {
//   type: 'LOGIN_USER',
//   payload: {name: Veronika, surname: Kostenko}
// }

// const action = {
//   type: 'LOGOUT_USER',
//   payload: null
// }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state
  }
};

const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = useCallback((user) => {
    dispatch({ type: "LOGIN_USER", payload: user});
  }, []);

  const logoutUser = useCallback(() => {
    dispatch({type: "LOGOUT_USER"});
  }, []);

  return {
    state,
    actions: {
      loginUser,
      logoutUser,
    },
  };
};

function App() {
  const store = useStore();

  return (
    <Store.Provider value={store}>
      <div className="App">
        <header className="header">
          <Navigation ></Navigation>
          <UserForm></UserForm>
        </header>
        <main>
          <Switch>
            {appRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="*">
              <p>No Path Found</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Store.Provider>
  );
}

export default App;
