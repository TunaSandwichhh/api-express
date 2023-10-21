import MongoDbClient from "../../../db/mongoClient";
import { Booking, isValidCreateBookingInput } from "../model/booking";
import ksuid from "ksuid";

export const createBooking = async (input: any) => {
  const mongoClient = new MongoDbClient();
  try {
    await mongoClient.connectToDb();

    const existingBookings = await mongoClient.retrieveBookingsByRoomAndDate(
      input.roomId,
      input.date
    );

    if (existingBookings.length > 0) {
      return {
        status: 409,
        body: {
          error: "Booking conflict: The room is already booked for this date",
        },
      };
    }

    const bookingId = input.bookingId || ksuid.randomSync().string;

    const booking: Booking = {
      bookingId,
      date: input.date,
      roomId: input.roomId,
    };

    await mongoClient.insertBooking(booking);

    return {
      status: 200,
      body: { message: "Booking successfully created" },
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: "Internal server error" },
    };
  } finally {
    await mongoClient.closeConnection();
  }
};
