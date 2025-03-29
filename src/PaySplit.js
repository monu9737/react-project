import React, { useState } from "react";
import "./PaySplit.css"; // Import the CSS file

const PaySplit = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [numPeople, setNumPeople] = useState(1);
    const [tipAmount, setTipAmount] = useState(0);
    const [splitAmount, setSplitAmount] = useState(0);
    const [isCalculated, setIsCalculated] = useState(false);
    const [billAmountErr, setBillAmountErr] = useState("");
    const [numPeopleErr, setNumPeopleErr] = useState("");

    const calculateFairShare = () => {
        // Reset errors first
        setBillAmountErr("");
        setNumPeopleErr("");

        if (billAmount <= 0) {
            setBillAmountErr("Bill Amount can't be zero or negative");
            return;
        }
        if (numPeople <= 0) {
            setNumPeopleErr("Number of People can't be zero or negative");
            return;
        }

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
        setBillAmountErr("");
        setNumPeopleErr("");
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
                        setBillAmountErr(""); // Clear error on change
                    }}
                />
                {billAmountErr && <h6 className="error-msg">{billAmountErr}</h6>}
            </div>

            <div className="input-group">
                <label>Select Tip (₹):</label>
                <input
                    type="number"
                    value={tipAmount}
                    onChange={(e) => setTipAmount(parseFloat(e.target.value))}
                />
            </div>
            <div className="input-group">
                <label>Number of People:</label>
                <input
                    type="number"
                    value={numPeople}
                    onChange={(e) => {
                        setNumPeople(parseInt(e.target.value));
                        setNumPeopleErr(""); // Clear error on change
                    }}
                /> 
                {numPeopleErr && <h6 className="error-msg">{numPeopleErr}</h6>}
            </div>
            <div className="button-group">
                <button className="calculate-btn" onClick={calculateFairShare}>
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
