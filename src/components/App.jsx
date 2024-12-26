import { use, useState } from "react";
import React from "react";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [serviceQuality, setServiceQuality] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [showTip, setshowTip] = useState(false)

  const CalculateTip = () => {
    if (!billAmount || !serviceQuality || !numberOfPeople) {
      alert("Please fill in all fields");
      return;
    }

   
    const totalTip = (billAmount * serviceQuality) / numberOfPeople;
    setTipAmount(totalTip.toFixed(2)); 
    setshowTip(true)
  };

  return (
    <div>
      <div className="xl:container h-screen flex items-center flex-col bg-sky-900 py-6">
        <div className="wrapper w-80 bg-white p-6 rounded">
          <h1 className="text-2xl mb-6">Tip Calculator</h1>
          <div className="wrapper-content">
            <p className="text-lg mb-5">Bill Amount</p>
            <input
              onChange={(e) => setBillAmount(e.target.value)}
              value={billAmount}
              className="mb-5 w-11/12"
              type="text"
              placeholder="Amount to be paid"
            />
            ₹<p className="text-lg mb-5">How was the service?</p>
            <select
              onChange={(e) => setServiceQuality(e.target.value)}
              value={serviceQuality}
              className="text-sm mb-5 w-full"
              id="services"
            >
              <option selected disabled hidden>
                Select
              </option>
              <option value="0.25">25% - Top Notch</option>
              <option value="0.20">20% - Excellent</option>
              <option value="0.15">15% - Good</option>
              <option value="0.10">10% - Bad</option>
              <option value="0.05">5% - Worst</option>
            </select>
            <p className="text-lg mb-5">Total number of people</p>
            <input
              onChange={(e) => setNumberOfPeople(e.target.value)}
              value={numberOfPeople}
              className="w-11/12 mb-5 people-number"
              type="text"
              placeholder="Number of people sharing the bill"
            />
            <br />
            <button
              onClick={CalculateTip}
              className="bg-sky-500 p-3 px-8 rounded-lg text-white"
            >
              Calculate
            </button>
            <div className="tip">
            {showTip && ( // Conditionally render the entire tip section
              <div className="tip mt-4">
                <p>Tip per Person:</p>
                <p>{`${tipAmount}₹`}</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
