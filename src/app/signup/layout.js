
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../components/bootstrapclient.js";
import "./page.js";
import "./page.css";
export const metadata = {
  title: "SignUp",
  description: "Waqf donation and management platform",
};
export default function AuthLayout({ children }) {

  return (

    <html lang="en">
      <body>
        <div className="w-full h-screen flex">
        <BootstrapClient />
        {children}
        </div>
      </body>
    </html>
  );
}
