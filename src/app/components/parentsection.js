'use client';

import React, { useState, useEffect } from "react";
import Donate from "../components/donatebutton";
import Herosection from "../components/sharebutton";

export default function First() {

  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState('');

  // Load username
  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUserName(name);
  }, []);

  // Fetch total donation
 
    const fetchTotal = async () => {

      try {

        const userId = localStorage.getItem("userId");

        if (!userId) return;

        const res = await fetch(`/api/total?userId=${userId}`);
        const data = await res.json();

        if (data.success) {
          setBalance(data.totalDonation);
        }

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {

  const interval = setInterval(() => {
    fetchTotal();
  }, 500);

  return () => clearInterval(interval);

}, []);

  return (
    <div className="containers my-5 bg-amber-200">

      <div className="PMy d-flex bg-white justify-content-between align-items-center">

        <div className="W-100">

          <div className="CMy d-flex">

            <h1 className="onchange">{userName}</h1>

            <Donate/>
            <Herosection />

          </div>

          <div className="d-flex align-items-center gap-5 my-4">

            <div>
              <small className="text-muted">Balance</small>
              <h1>${balance}</h1>
            </div>

          </div>

          <div className="d-flex gap-5">

            <div>
              <small className="text-muted">Income generated</small>
              <h1>${balance}</h1>
            </div>

            <div>
              <small className="text-muted">Value in 100 Years</small>
              <h1>${balance*0.5}</h1>
            </div>

          </div>

        </div>

        <div>
          <img className="tree" src="/tree.svg" alt="Tree" width="350" />
        </div>

      </div>

    </div>
  );
}