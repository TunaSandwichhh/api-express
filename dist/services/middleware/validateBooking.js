"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBooking = void 0;
const booking_1 = require("../booking-API/model/booking");
const validateBooking = (req, res, next) => {
    const isValid = (0, booking_1.isValidCreateBookingInput)(req.body);
    if (!isValid) {
        return res.status(400).json({ message: "Invalid booking data" });
    }
    next();
};
exports.validateBooking = validateBooking;
