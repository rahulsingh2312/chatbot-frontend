// pages/api/fetchAppointments.js

export default async function handler(req, res) {
    try {
      const response = await fetch("https://us-central1-proven-gasket-416318.cloudfunctions.net/doctors/doctors/1/slot");
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  