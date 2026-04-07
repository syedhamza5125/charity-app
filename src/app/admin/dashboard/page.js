'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {

  const router = useRouter();

  const [totalDonation, setTotalDonation] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [donations, setDonations] = useState([]);

  useEffect(() => {

  

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {
    try {

      const res = await fetch("/api/admin-dashboard");
      const data = await res.json();

      if (data.success) {
        setTotalDonation(data.totalDonation);
        setTotalUsers(data.totalUsers);
        setDonations(data.recentDonations);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="row mb-4">

        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Total Donations</h5>
            <h3 className="text-success">${totalDonation}</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Total Users</h5>
            <h3 className="text-primary">{totalUsers}</h3>
          </div>
        </div>

      </div>

      {/* Recent Donations Table */}
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Recent Donations</h4>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User</th>
              <th>Cause</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.length > 0 ? (
              donations.map((item) => (
                <tr key={item._id}>
                  <td>{item.userId}</td>
                  <td>{item.causeId}</td>
                  <td>${item.amount}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
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
