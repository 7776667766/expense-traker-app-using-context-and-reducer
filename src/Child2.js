import React, {useReducer,createContext}from 'react'

import ReducerAdd from './Reducer';


const initialState = {
    transactions: []
}

export default initialState
export const AddedHistory=createContext(initialState);


export const TransProvider=({ children })=>{
const [state, dispatch] = useReducer(ReducerAdd, initialState);

function delTransaction(id){
    dispatch({
    type:"DEL_TRANSACTION",
    payload: id
    
       } ) 
  };

    function addtransaction(transaction){
    dispatch({
    type:"ADD_TRANSACTION",
    payload: transaction
    
       } ) 
  };
  
  return(
     <AddedHistory.Provider value={{
        transactions: state.transactions,
         addtransaction,
         delTransaction
         }}>
          
          { children }
     </AddedHistory.Provider>
      
  )
  
     
      }