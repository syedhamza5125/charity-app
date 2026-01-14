'use client'
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => setSettings(data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <html>
        <body>
    <div>
      <h1>Settings Page</h1>
      
    </div>
    </body>
    </html>
  );
}
