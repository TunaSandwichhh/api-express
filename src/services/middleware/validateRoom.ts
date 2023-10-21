import { isValidCreateRoomInput } from "../room-API/model/room";

export const validateRoom = (req, res, next) => {
  const isValid = isValidCreateRoomInput(req.body);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid room data" });
  }
  next();
};
