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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const mongoClient_1 = __importDefault(require("../../../db/mongoClient"));
const ksuid_1 = __importDefault(require("ksuid"));
const createBooking = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoClient = new mongoClient_1.default();
    try {
        yield mongoClient.connectToDb();
        const existingBookings = yield mongoClient.retrieveBookingsByRoomAndDate(input.roomId, input.date);
        if (existingBookings.length > 0) {
            return {
                status: 409,
                body: {
                    error: "Booking conflict: The room is already booked for this date",
                },
            };
        }
        const bookingId = input.bookingId || ksuid_1.default.randomSync().string;
        const booking = {
            bookingId,
            date: input.date,
            roomId: input.roomId,
        };
        yield mongoClient.insertBooking(booking);
        return {
            status: 200,
            body: { message: "Booking successfully created" },
        };
    }
    catch (error) {
        return {
            status: 500,
            body: { error: "Internal server error" },
        };
    }
    finally {
        yield mongoClient.closeConnection();
    }
});
exports.createBooking = createBooking;
