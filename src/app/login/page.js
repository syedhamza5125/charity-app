'use client';
import { useState } from  'react';
import Link from 'next/link';
import './page.css';
export default function Login() {
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const handlelogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Hamza', email: Email, password: Password })
    });
    console.log(res.status);
    const data = await res.json();
    if (res.ok) {
      alert("Login successful");
    } else {
      alert("login failed");
    }
  };
  return (
    <div className="login-bg">
      <div className="login-popup">
        <form className="form" onSubmit={handlelogin}>
          <a href="/">
              <img src="/waqfera.png" alt="logo" className="logo" width="70px" />
            </a>
  
            <div className="form-group">
              <h5 className="sub-hed">Email address</h5>
              <input
                type="email"
                id="l-email"
                placeholder="yourname@example.com"
                className="input"
                onChange={(e)=>setemail(e.target.value)}
                required
              />
  
              <h5 className="sub-hed mt-2">Password</h5>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="l-password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={(e)=>setpassword(e.target.value)}
                  required
                />
              </div>
              <div className="rw">
              <button type="submit" className="sign-in">Login</button>
                <p><a href="/forgetpassword">Forgot password?</a></p>
                </div>
                <br />
                <p>
                  Don't have an account? <Link href="/signup" className="aa">
          signup
        </Link>
                </p>
             
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  