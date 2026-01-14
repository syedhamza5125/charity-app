import Link from 'next/link';
import './page.css';
export default function LoginPage() {
    return (
      <div className="login-bg">
        <div className="login-popup">
          <form className="form">
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
              />
  
              <h5 className="sub-hed mt-2">Password</h5>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="l-password"
                  placeholder="Enter Password"
                  className="input"
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
  
  