'use client';
import { useState } from  'react';
import Link from 'next/link';
import './page.css';
import { useRouter } from 'next/navigation';
export default function Login() {
  const router = useRouter();
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const handlelogin = async (e) => {
    e.preventDefault();
    setloading(true);
    seterror(null);
    try {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: Email, password: Password }),
      credentials: 'include',
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
       const userId = data.data._id;

  localStorage.setItem("userId", userId);
  localStorage.setItem("userEmail", data.data.email);
  localStorage.setItem("userName", data.data.name);
  localStorage.setItem("user", JSON.stringify(data.data));
      
      router.push('/dashboard');
    } else {
      seterror(data.message || 'Login failed');
    }
  } catch (err) {
        seterror('some thing went wrong' );
  }
      setloading(false);
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
                {error && <p className="error-message">{error}</p>}
              </div>
              <div className="rw">
              <button type="submit" className="sign-in btn btn-success" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
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
  
  