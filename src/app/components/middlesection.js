'use client';
import React, { useState, useEffect } from "react";
import Addwaqf from "./causesbutton";

export default function Second() {

  const [selectedCause, setselectedCause] = useState('');
  const [causeTotals, setCauseTotals] = useState({});

  const causes = [
    { name: 'Most Needed', image: '1.png' },
    { name: 'Food Poverty', image: '2.png' },
    { name: 'Education', image: '3.png' },
    { name: 'Financial', image: '4.png' },
    { name: 'Community', image: '5.png' },
  ];

  // Fetch user cause totals


    const fetchUserCause = async () => {

      try {

        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const res = await fetch(`/api/user-cause?userId=${userId}`);
        const data = await res.json();

        if (data.success) {

          const totalsObj = {};

          data.data.forEach(item => {
            totalsObj[item._id] = item.total;
          });

          setCauseTotals(totalsObj);
        }

      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {

  const interval = setInterval(() => {
    fetchUserCause();
  },500); // 5 sec best balance

  return () => clearInterval(interval);

}, []);


  return (
    <>
      <Addwaqf selectedCause={selectedCause} />

      <div className="cause row mt-4">

        {causes.map((item, index) => (

          <div className="col-lg-3 mb-4" key={index}>

            <div className="border bg-light rounded p-2">

              <img src={item.image} width="100%" />

              <div className="d-flex justify-content-between align-items-center p-2">
                <h3>{item.name}</h3>
              </div>

              <h3 className="p-2">
                ${causeTotals[item.name] || 0}
              </h3>

              <button
                className="D-btn btn btn-success w-100"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={() => setselectedCause(item.name)}
              >
                Donate
              </button>

            </div>
          </div>

        ))}

      </div>
    </>
  );
}