import { isValidCreateBookingInput } from "../booking-API/model/booking";

export const validateBooking = (req, res, next) => {
  const isValid = isValidCreateBookingInput(req.body);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid booking data" });
  }
  next();
};
