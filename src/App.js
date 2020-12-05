import React from "react"
import './App.css';
import Child from './Child'
import { Header } from './header';
import { Balance } from './Balance';
import { AccountSummary } from './AccountSummary';
import { TransProvider } from "./Child2";
import { TransactionHistory } from './TransactionHistory';


function App() {
  return (
    
      <TransProvider>
      <div >
      <Header className="container" />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <Child/>
      </div>
      </TransProvider>
   
  );
}

export default App;
