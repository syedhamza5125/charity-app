'use client';
import React, { useState } from "react";
import './navbar.css';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className="navbar  bg-body-tertiarys">
      <div className="container-fluid">
        <a className="navbar-brand " href="#"> <img src="/waqfera.png" alt="" width="70" /></a>
        <div className="w-50 d-flex justify-content-center ">
          <a className="navbar-brand ms-2" href="#"> <img src="/paata.svg" alt="" width="50" /></a>
          <div className="dropdown">
            <button  className="navbar-toggler" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><h6 className="email">yourname@example.com</h6></li>
              <li><a className="dropdown-item" href="/settings">Setting</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}