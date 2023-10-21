"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCreateBookingInput = void 0;
const joi_1 = __importDefault(require("joi"));
const isValidCreateBookingInput = (data) => {
    const schema = joi_1.default.object({
        bookingId: joi_1.default.string(),
        date: joi_1.default.date().required(),
        roomId: joi_1.default.string().required(),
    });
    const { error } = schema.validate(data);
    return !error;
};
exports.isValidCreateBookingInput = isValidCreateBookingInput;
