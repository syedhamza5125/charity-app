'use client'
import React, { useState } from "react";
export default function Third(){
    return(
        <div className="global">
              <h2 className="mb-4">Global Leaderboard</h2>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Waqf Name</th>
                      <th>Balance</th>
                      <th>Income Generated</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Mirza’s Waqf", balance: "£2040.00", income: "£200.00", location: "London" },
                      { name: "Ali Family Waqf", balance: "£1010.00", income: "£300.00", location: "Dubai" },
                      { name: "Health Waqf", balance: "£810.00", income: "£400.00", location: "London" },
                      { name: "Education Waqf", balance: "£740.00", income: "£160.00", location: "pakistan" },
                      { name: "Hospital Waqf", balance: "£640.00", income: "£260.00", location: "Sri lanka" },
                    ].map((waqf) => (
                      <tr key={waqf.name}>
                        <td>{waqf.name}</td>
                        <td>{waqf.balance}</td>
                        <td>{waqf.income}</td>
                        <td>{waqf.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    );
}