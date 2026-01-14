export default function handler(req, res) {
  // Example data, real me DB se fetch kar sakte ho
  const settingsData = {
    theme: "dark",
    notifications: true,
    language: "English",
  };

  res.status(200).json({ success: true, data: settingsData });
}
