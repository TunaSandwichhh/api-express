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
const mongodb_1 = require("mongodb");
class MongoDbClient {
    constructor() {
        this.uri = "mongodb://root:examplepassword@localhost:27017/";
        this.dbName = "Hotel_DB";
        this.client = new mongodb_1.MongoClient(this.uri);
    }
    connectToDb() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
        });
    }
    retrieveBookingsByRoomAndDate(roomId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = this.client.db(this.dbName);
            const bookingsCollection = db.collection("bookings");
            const query = {
                roomId: roomId,
                date: date,
            };
            const bookings = yield bookingsCollection.find(query).toArray();
            return bookings;
        });
    }
    retrieveRoom(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.client.db(this.dbName).collection("rooms");
            const room = yield collection.findOne({ roomId });
            return room;
        });
    }
    retrieveBooking(bookingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.client.db(this.dbName).collection("bookings");
            const booking = yield collection.findOne({ bookingId });
            return booking;
        });
    }
    insertRoom(room) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.client.db(this.dbName).collection("rooms");
            yield collection.insertOne(room);
        });
    }
    insertBooking(booking) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.client.db(this.dbName).collection("bookings");
            yield collection.insertOne(booking);
        });
    }
    closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client) {
                yield this.client.close();
            }
        });
    }
}
exports.default = MongoDbClient;
