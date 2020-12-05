import React, {useContext,useState} from 'react';
import { AddedHistory } from './Child2';


const Child=()=>{
const {addtransaction}    = useContext(AddedHistory);

let [description, setDescription] = useState('');
let [transactionAmount, setAmount] = useState(0);

const handleLoading=(event)=>{
event.preventDefault();

const newTransaction = {
    id: new Date().getTime(),
    description,
    transactionAmount: +transactionAmount
}

addtransaction(newTransaction);
}
 return(


    <div>
        <div>
            <h4>HISTORY</h4>
            
           

<h4>ADD transection</h4>
<form   className="" onSubmit={handleLoading}>
    <label>
        ENTER DESCRIPTION
<hr />
        <input type='TEXT' onChange={(ev) => setDescription(ev.target.value)} ></input>

    </label>

    <hr />
    <label>
        ENTER AMOUNT
<hr />
        <input Type='text' onChange={(ev) => setAmount(ev.target.value)} ></input>

    </label>


    <br />
    <hr />
<div className="btn">
    <input type='submit' value='ADDTRANCECTION'
        >

    </input>
    </div>

</form>
</div>

</div>

    )
}
export default Child
