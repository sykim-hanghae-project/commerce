import React, { createContext, useContext, useEffect, useState } from 'react'
import { User as TUser } from '@/types/user';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/helpers/firebase';
import { getUser } from '@/api/getUser';

type State = {
  loggedUser: TUser | null,
  isLoggedIn: boolean,
}

// type Action = 
//   | { type: 'SET_USER'; loggedUser: User } 
//   | { type: 'SET_ISLOGGEDIN'; isLoggedIn: boolean };

const StateContext = createContext<State>({
  loggedUser: null,
  isLoggedIn: false
});
// const DispatchContext = createContext<Dispatch<Action> | null>(null);

interface Props {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<TUser | null>(null)
  // const [state, dispatch] = useReducer(reducer, 
  //   user 
  //   ? { loggedUser: user, isLoggedIn: true }
  //   : { loggedUser: null, isLoggedIn: false }
  // );

  const onChange = (user: User | null) => {
    if (user) {
      getUser(user.uid)
      .then((res) => {
        if (res) setUser(res)
      })
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onChange)
    return () => unsubscribe()
  }, [])

  return (
    <StateContext.Provider value={{ loggedUser: user, isLoggedIn: user ? true: false}}>
      {children}
      {/* <DispatchContext.Provider value={dispatch}> */}
        
      {/* </DispatchContext.Provider> */}
    </StateContext.Provider>
  )
}

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'SET_USER':
//       return {
//         ...state,
//         loggedUser: action.loggedUser
//       };
//     case 'SET_ISLOGGEDIN':
//       return {
//         ...state,
//         isLoggedIn: action.isLoggedIn
//       };
//     default:
//       throw new Error('Unhandled Action');
//   }
// }

function useUserState() {
  const state = useContext(StateContext)
  if (!state) {
    throw new Error('Cannot find UserContextProvider')
  }
  return state
}

// function useUserDispatch() {
//   const dispatch = useContext(DispatchContext)
//   if (!dispatch) {
//     throw new Error('Cannot find UserContextProvider')
//   }
//   return dispatch
// }

export {
  UserContextProvider,
  useUserState,
  // useUserDispatch
}