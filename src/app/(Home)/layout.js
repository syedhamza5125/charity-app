
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../components/bootstrapclient.js";
import Navbar from '../components/Navbar.js';
import  "../globals.css";
export const metadata = {
  title: "Waqfera",
  description: "Waqf donation and management platform",
};
export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body>
        <Navbar />
       <main style={{padding: 25}}></main>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
