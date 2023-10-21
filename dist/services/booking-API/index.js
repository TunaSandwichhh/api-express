"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createBooking_1 = require("./functions/createBooking");
const getBooking_1 = require("./functions/getBooking");
const validateBooking_1 = require("../middleware/validateBooking");
const router = (0, express_1.Router)();
router.post("/", validateBooking_1.validateBooking, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const bookingResponse = yield (0, createBooking_1.createBooking)(body);
    return res.status(bookingResponse.status).json(bookingResponse.body);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingId = req.params.id;
    const booking = yield (0, getBooking_1.getBooking)(bookingId);
    return res.status(booking.status).json(booking.body);
}));
exports.default = router;
