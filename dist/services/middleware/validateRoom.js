"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRoom = void 0;
const room_1 = require("../room-API/model/room");
const validateRoom = (req, res, next) => {
    const isValid = (0, room_1.isValidCreateRoomInput)(req.body);
    if (!isValid) {
        return res.status(400).json({ message: "Invalid room data" });
    }
    next();
};
exports.validateRoom = validateRoom;
