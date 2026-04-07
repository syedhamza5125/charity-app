'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {

  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {

    const storedId = localStorage.getItem("userId");
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedId) {
      router.push("/login");
      return;
    }

    setUserName(storedName);
    setEmail(storedEmail);

    fetchDonations(storedId);

  }, []);

  const fetchDonations = async (userId) => {

    try {

      const res = await fetch(`/api/causes?userId=${userId}`);
      const data = await res.json();

      if (data.success) {
        setDonations(data.donations);
        setTotalAmount(data.totalAmount);
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">User Dashboard</h2>

      <div className="card p-3 mb-4 shadow-sm">
        <h5>Name: {userName}</h5>
        <h5>Email: {email}</h5>

        <h4 className="text-success mt-2">
          Total Donated: ${totalAmount}
        </h4>
      </div>

      <div className="card p-3 shadow-sm">

        <h4 className="mb-3">Donation History</h4>

        <table className="table table-bordered">

          <thead>
            <tr>
              <th>Cause</th>
              <th>Amount</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {donations.length > 0 ? donations.map((item) => (
              <tr key={item._id}>
                <td>{item.causeId}</td>
                <td>${item.amount}</td>
                <td>{item.message || "-"}</td>
                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No donations yet
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}