import { isValidCreateBookingInput } from "../booking-API/model/booking";
import { Request, Response, NextFunction } from "express";

export const validateBooking = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isValid = isValidCreateBookingInput(req.body);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid booking data" });
  }
  next();
};
