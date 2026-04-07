'use client';
import React, { useState, useEffect } from "react";

export default function Donate() {

  const [causeId, setCauseId] = useState("");
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  const causes = [
    { name: 'Most Needed', id: 'Most Needed' },
    { name: 'Food Poverty', id: 'Food Poverty' },
    { name: 'Education', id: 'Education' },
    { name: 'Financial', id: 'Financial' },
    { name: 'Community', id: 'Community' },
  ];

  // Load username
  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUserName(name);
  }, []);

  // Donation handler
  const handleDonate = async () => {

    if (!amount || amount <= 0) {
      setMessage('Please enter a valid amount');
      return;
    }

    if (!causeId) {
      setMessage("Please select a cause");
      return;
    }

    try {

      const userId = localStorage.getItem("userId");

      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          cause: causeId,
          amount: Number(amount)
        })
      });

      const donateData = await response.json();

      if (donateData.success) {
        setMessage("Donation submitted successfully!");
        setAmount('');
        alert("Thank you for your donation!");
      } else {
        setMessage("Donation failed");
      }
    } catch (error) {
      setMessage("Server error.");
    }
  };

  return (
    <>
      {/* FIRST MODAL */}
      <div className="modal fade" id="exampleModalToggle" tabIndex="-1">

        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5">
                <img src="./donatehand.png" width="30" style={{ borderRadius: "100%" }} /> Donate
              </h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">

              <h6 style={{ color: '#5B6D93' }}>Waqf's Name</h6>
              <h6 style={{ color: '#5B6D93' }}>{userName}</h6>

              <h5 style={{ color: '#5B6D93' }}>Select Cause</h5>

              <select
                className="form-select"
                value={causeId}
                onChange={(e) => setCauseId(e.target.value)}
              >
                <option value="">-- Select Cause --</option>

                {causes.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}

              </select>

              <h6 style={{ color: '#5B6D93' }}>Choose donation amount</h6>

              <div className="d-flex gap-2 mb-2">
                <button type="button" className="ambutton" onClick={() => setAmount(10)}>$10</button>
                <button type="button" className="ambutton" onClick={() => setAmount(20)}>$20</button>
                <button type="button" className="ambutton" onClick={() => setAmount(30)}>$30</button>
                <button type="button" className="ambutton" onClick={() => setAmount(50)}>$50</button>
              </div>

              <input
                type="number"
                placeholder="Enter custom amount"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

            </div>

            <div className="modal-footer">
              <button
                className="btn btn-success"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Proceed
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* SECOND MODAL */}
      <div className="modal fade" id="exampleModalToggle2" tabIndex="-1">

        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">

            <div className="modal-header">
              <h5>Donate</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body text-center">

              <h5>Total Donation</h5>
              <h3>${amount}</h3>

              {message && <p className="text-success mt-2">{message}</p>}

            </div>

            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleDonate}>
                Donated
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN BUTTON */}
      <button
        className="donate btn btn-success"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Donate
      </button>

    </>
  );
}