import React, { Dispatch, createContext, useContext, useReducer } from 'react'
import { User } from '@/types/user';

type State = {
  loggedUser: User | null,
  isLoggedIn: boolean,
}

type Action = 
  | { type: 'SET_USER'; loggedUser: User } 
  | { type: 'SET_ISLOGGEDIN'; isLoggedIn: boolean };

const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatch<Action> | null>(null);

interface Props {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    loggedUser: null,
    isLoggedIn: false
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedUser: action.loggedUser
      };
    case 'SET_ISLOGGEDIN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    default:
      throw new Error('Unhandled Action');
  }
}

function useUserState() {
  const state = useContext(StateContext)
  if (!state) {
    throw new Error('Cannot find UserContextProvider')
  }
  return state
}

function useUserDispatch() {
  const dispatch = useContext(DispatchContext)
  if (!dispatch) {
    throw new Error('Cannot find UserContextProvider')
  }
  return dispatch
}

export {
  UserContextProvider,
  useUserState,
  useUserDispatch
}