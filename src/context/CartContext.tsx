import React, { Dispatch, createContext, useContext, useReducer } from 'react'
import { CartItem } from '@/types/CartItem';

type State = {
  items: CartItem[],
}

type Action = 
  | { type: 'ADD_ITEM'; itemId: string; price: number } 
  | { type: 'DELETE_ITEM'; itemId: string }
  | { type: 'INCREMENT_ITEM'; itemId: string }
  | { type: 'DECREMENT_ITEM'; itemId: string }

const getCartItem = () => {
  const string_cart = window.localStorage.getItem('cart')
  // console.log("string_cart",string_cart)
  if (!string_cart) return []

  const cart = JSON.parse(string_cart)
  return cart.items
}

const StateContext = createContext<State>({ items: getCartItem() });
const DispatchContext = createContext<Dispatch<Action> | null>(null);

interface Props {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, { items: getCartItem() });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function reducer(state: State, action: Action): State {
  let newState = undefined
  switch (action.type) {
    case 'ADD_ITEM': {
      newState =  {
        items: [
          ...state.items,
          {
            id: action.itemId,
            quantity: 1,
            price: action.price
          }
        ]
      }
      console.log("newState",newState)
      break
    }
    case 'DELETE_ITEM': {
      newState = {
        items: state.items.filter(item => item.id !== action.itemId)
      }
      break
    }
    case 'INCREMENT_ITEM': {
      const idx = state.items.findIndex(item => item.id === action.itemId)
      const prevItem = state.items[idx]
      newState =  {
        items: [
          ...state.items.slice(0,idx),
          { ...prevItem, quantity: prevItem.quantity + 1 },
          ...state.items.slice(idx+1)
        ]
      }
      break
    }
    case 'DECREMENT_ITEM': {
      const idx = state.items.findIndex(item => item.id === action.itemId)
      const prevItem = state.items[idx]
      newState = {
        items: [
          ...state.items.slice(0,idx),
          { ...prevItem, quantity: prevItem.quantity - 1 },
          ...state.items.slice(idx+1)
        ]
      }
      break
    }
    default:
      throw new Error('Unhandled Action');
  }

  //localStorage에 기록
  window.localStorage.setItem('cart', JSON.stringify(newState))
  return newState
}

function useCartState() {
  const state = useContext(StateContext)
  if (!state) {
    throw new Error('Cannot find UserContextProvider')
  }
  return state
}

function useCartDispatch() {
  const dispatch = useContext(DispatchContext)
  if (!dispatch) {
    throw new Error('Cannot find UserContextProvider')
  }
  return dispatch
}

export {
  CartContextProvider,
  useCartState,
  useCartDispatch
}