
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../../components/bootstrapclient.js";

export const metadata = {
  title: "admin Panel",
  description: "admin dashboard for Waqf donation and management platform",
};
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