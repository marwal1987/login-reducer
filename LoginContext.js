const { createContext, useReducer, useContext } = require("react");

export const LoginContext = createContext();

const initialState = {
  loggedIn: false,
  username: null,
};

function loginReducer(state, action) {
  if (action.type == "login") {
    return {
      ...state,
      loggedIn: true,
      username: action.username,
    };
  } else if (action.type == "logout") {
    return {
      ...state,
      loggedIn: false,
      username: null,
    };
  } else {
    return state;
  }
}

export function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
