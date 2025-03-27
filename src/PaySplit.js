import React, { useState } from "react";
import "./PaySplit.css"; // Import the CSS file

const PaySplit = () => {
    const [billAmount, setBillAmount] = useState();
    const [numPeople, setNumPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState(0);
    const [splitAmount, setSplitAmount] = useState(0);
    const [isCalculated, setIsCalculated] = useState(false);

    const calculateFairShare = () => {
        let totalAmount = billAmount + tipAmount;
        setSplitAmount((totalAmount / numPeople).toFixed(2));
        setIsCalculated(true);
    };

    const handleReset = () => {
        setBillAmount(0);
        setNumPeople(1);
        setTipAmount(0);
        setSplitAmount(0);
        setIsCalculated(false);
    };

    return (
        <div className="container">
            <h1>Fair Share</h1>
            <div className="input-group">
                <label>Bill Amount:</label>
                <input
                    type="number"
                    value={billAmount}
                    onChange={(e) => {
                        setBillAmount(parseFloat(e.target.value));
                    }}
                />
                {billAmount<=0 && <h6>Bill Amount can't be zero</h6>}
            </div>
            <div className="input-group">
                <label>Select Tip (₹):</label>
                <input
                    type="number"
                    value={tipAmount}
                    onChange={(e) => {
                        setTipAmount(parseInt(e.target.value));
                    }}
                />
            </div>
            <div className="input-group">
                <label>Number of People:</label>
                <input
                    type="number"
                    value={numPeople}
                    onChange={(e) => {
                        setNumPeople(parseInt(e.target.value));
                    }}
                /> 
                {numPeople<=0  && <h6>Number of People can't be zero</h6>}
            </div>
            <div className="button-group">
                <button className="calculate-btn" 
                    onClick={() => {
                        if(billAmount>0 && numPeople>0){
                            calculateFairShare();
                        }
                    }}>
                    Calculate Split Share
                </button>
                <button className="reset-btn" type="button" onClick={handleReset}>
                    Reset
                </button>
            </div>
            {isCalculated && <h3>Each Person Pays: ₹{splitAmount}</h3>}
            

            <footer className="footer">
                <p>📧 Email : <a href="mailto:monu9737@gmail.com">monu9737@gmail.com</a></p>
            </footer>
        </div>
        
    );
};

export default PaySplit;
