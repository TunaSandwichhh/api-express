"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_API_1 = __importDefault(require("./services/room-API"));
const booking_API_1 = __importDefault(require("./services/booking-API"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/rooms", room_API_1.default);
app.use("/bookings", booking_API_1.default);
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
exports.default = app;
