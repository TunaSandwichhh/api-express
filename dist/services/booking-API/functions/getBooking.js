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
exports.getBooking = void 0;
const mongoClient_1 = __importDefault(require("../../../db/mongoClient"));
const getBooking = (bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const dbClient = new mongoClient_1.default();
    try {
        yield dbClient.connectToDb();
        const booking = yield dbClient.retrieveBooking(bookingId);
        if (!booking) {
            return {
                status: 404,
                body: { error: "Booking not found" },
            };
        }
        return {
            status: 200,
            body: { booking },
        };
    }
    catch (error) {
        return {
            status: 500,
            body: { error: "Internal server error" },
        };
    }
    finally {
        yield dbClient.closeConnection();
    }
});
exports.getBooking = getBooking;
