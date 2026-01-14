import './page.css';
import Link from 'next/link';
export default function signup() {
  return (
    
    <div className="d-flex justify-content-center align-items-center">
      <div className="head">
      <a href="/"><img src="./waqfera.png" alt="logo" className="logo" width="70px"/></a>
        <form className='forms'>
          <h6>Email address</h6>
          <input type="E-mail" placeholder="yourname@example.com" aria-label="E=mail" />
          <h6>Password</h6>
          <input type="password" placeholder="password" aria-label="password" />
          <h6>Confirm-password</h6>
          <input type="password" placeholder="confirm-password" aria-label="confirm-password" />

        </form>
        <input className='box' type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input> I accept the <a href="/files/terms_and_conditions.pdf" target="_blank" rel="noopener noreferrer">
          Terms & Conditions
        </a> and <a href="/files/privacy_and_policy.pdf" target="_blank" rel="noopener noreferrer">
          privacy police </a>
        <div className='btns'>
          <button>Sign Up</button>
          <p>Already have an account?</p>
          <Link href="/login" className="login">
            Login
          </Link>

        </div>
      </div>

    </div>
  );
}
