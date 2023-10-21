import { isValidCreateRoomInput } from "../room-API/model/room";
import { Request, Response, NextFunction } from "express";

export const validateRoom = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isValid = isValidCreateRoomInput(req.body);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid room data" });
  }
  next();
};
