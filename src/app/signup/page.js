"use client";
import { useState } from 'react';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Signup() {
  const router = useRouter();
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [ConfirmPassword, setconfirmpassword] = useState('');

  const handlesignup = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const res = await fetch('api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'hamza', email: Email, password: Password,})
    });
    const data = await res.json();
    if(res.ok){
      localStorage.setItem("userEmail", data.data.email);
      localStorage.setItem("userName", data.data.name);
      localStorage.setItem("user", JSON.stringify(data.data));
      router.push('/dashboard');
    } else {
      alert("Signup failed: " + data.message );
    }
     
  };
  return (
    
    <div className="d-flex justify-content-center align-items-center">
      <div className="head">
      <a href="/"><img src="./waqfera.png" alt="logo" className="logo" width="70px"/></a>
        <form className='forms' onSubmit={handlesignup}>
          <h6>Email address</h6>
          <input type="E-mail" placeholder="yourname@example.com" aria-label="E=mail"  onChange={(e) => setemail(e.target.value)}/>
          <h6>Password</h6>
          <input type="password" placeholder="password" aria-label="password" onChange={(e) => setpassword(e.target.value)} />
          <h6>Confirm-password</h6>
          <input type="password" placeholder="confirm-password" aria-label="confirm-password" onChange={(e) => setconfirmpassword(e.target.value)} />
         <button type='submit' className="btn btn-success">Sign Up</button>
        </form>
        <input className='box' type="checkbox" id="termagreed" value="" aria-label="..."></input> I accept the{" "} <a href="/files/terms_and_conditions.pdf" target="_blank" rel="noopener noreferrer">
          Terms & Conditions {""}
        </a> and{"."} <a href="/files/privacy_and_policy.pdf" target="_blank" rel="noopener noreferrer">
          privacy police </a>
        <div className='btns'>
          <p>Already have an account?</p>
          <Link href="/login" className="login">
            Login
          </Link>

        </div>
      </div>

    </div>
  );
}
