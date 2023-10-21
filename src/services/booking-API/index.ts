import { Router } from "express";
import { createBooking } from "./functions/createBooking";
import { getBooking } from "./functions/getBooking";
import { validateBooking } from "../middleware/validateBooking";

const router = Router();

router.post("/", validateBooking, async (req, res) => {
  const { body } = req;
  const bookingResponse = await createBooking(body);
  return res.status(bookingResponse.status).json(bookingResponse.body);
});

router.get("/:id", async (req, res) => {
  const bookingId = req.params.id;
  const booking = await getBooking(bookingId);
  return res.status(booking.status).json(booking.body);
});

export default router;
