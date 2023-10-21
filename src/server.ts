import express from "express";
import roomRouter from "./services/room-API";
import bookingRouter from "./services/booking-API";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/rooms", roomRouter);
app.use("/bookings", bookingRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An error occurred" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
