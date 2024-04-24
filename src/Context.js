import {  createContext, useState } from "react";

const Context= createContext();

const ContextProvider = ({children})=>{
  const [budget, setBudget] = useState(0);
  const [budgetList,setBudgetList] = useState([]);

 

  return(
    <>
    <Context.Provider value={{budget,setBudget,budgetList,setBudgetList}}>
      {children}
    </Context.Provider>
    </>
  )

}

export {Context,ContextProvider}

