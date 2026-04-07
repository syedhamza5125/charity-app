'use client';
import React, { useState, useEffect} from "react";
import './navbar.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Navbar() {
  const router = useRouter();
  const [userEmail, setUserEmail]= useState('');
    useEffect(() => {
      const email = localStorage.getItem('userEmail');
      if (email) {
        setUserEmail(email);
      }
    }, []);
  const handleLogout = async () => {
    await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.removeItem("userId");
localStorage.removeItem("userName");
    router.push('/login');
  }
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
            <ul className="dropdown-menu dropdown-menu-end">
              <li><h6 className="email"> {userEmail || "yourname@example.com"}</h6></li>
              <li><a className="dropdown-item" href="/dashboard">Setting</a></li>
              <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}