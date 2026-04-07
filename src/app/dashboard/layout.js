import "./page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../components/bootstrapclient.js";
const { metadata } = require("../(Home)/layout");

metadata.title = "Home page";
metadata.description = "User dashboard for Waqf donation and management platform";
export { metadata };
export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
               <BootstrapClient />
            </ body>
            </html>
            );
}