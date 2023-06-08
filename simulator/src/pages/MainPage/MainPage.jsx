import React, { useEffect, useState} from 'react';
import './MainPage.scss';
import bgImg from '../../assets/bg.webp';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const MainPage = () => {
    const [amount, setamount] = useState();
    const [id, setid] = useState("");
    const [transactionStatus, settransactionStatus] = useState('')
    console.log(amount);
    
    const handleSubmit = async() => {
        const uniqueId = uuidv4();
        console.log(uniqueId)
        setid(uniqueId);
        console.log(id)
        const transactionData = 
            {
                id:uniqueId,
                card_no: 1234567812345678,
                receiverAcc: 9876543298765432,
                amount:Number(amount),
                status: 'Processing',
            }
        await axios.post('http://localhost:8080/pushTransaction', transactionData).then(() => {
            console.log("Transaction Added")
        })
        const url = `http://localhost:8080/status/${uniqueId}`;
        setid("");
        setInterval(() => {
            axios.get(url).then((data) => {
            // console.log(data.data);
            settransactionStatus(data.data);
            console.log(transactionStatus);
            });
        }, 30);
    }

    const setColor = (status) => {
        if(status === "Transaction Successful"){
            return "green";
        }
        if(status === "Transaction Failed"){
            return "red";
        }
        else{
            return "yellow"
        }
    };
    
    

  return (

    <div className="app__mainpage">
        <div className="app__mainpage-left">
            <h1>D-Auth Simulation</h1>
            <div className="app__mainpage-left-card">
                <h2>Secure Bank</h2>
                <div className="app__card-info">
                <p id='info'>1234 5678 1234 5678</p>
                <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
        <div className="app__mainpage-right">
            <div className="input-group">
                <p>Card Number</p>
                <input type="text" placeholder='1234 5678 1235 5678' name='cardNo' readOnly />
            </div>
            <div className="input-group">
                <p>Amount</p>
                <input type="text" name='amount' placeholder='Enter the Amount' onChange={(event => {setamount(event.target.value)})}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <h2 className='transactionStatus' style={{color: setColor(transactionStatus)}}>{transactionStatus}</h2>
        </div>
    </div>
  )
}

export default MainPage