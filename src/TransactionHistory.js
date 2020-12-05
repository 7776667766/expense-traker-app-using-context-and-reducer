import React, { useContext } from 'react';

// Import Transaction Component
import { Transaction } from './Transaction';

// Import the Global State
import { AddedHistory } from './Child2';

export const TransactionHistory = () => {

    const { transactions } = useContext(AddedHistory);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}