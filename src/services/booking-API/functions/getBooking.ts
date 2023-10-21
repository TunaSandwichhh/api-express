import MongoDbClient from "../../../db/mongoClient";

export const getBooking = async (bookingId: string) => {
  const dbClient = new MongoDbClient();

  try {
    await dbClient.connectToDb();
    const booking = await dbClient.retrieveBooking(bookingId);

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
  } catch (error) {
    return {
      status: 500,
      body: { error: "Internal server error" },
    };
  } finally {
    await dbClient.closeConnection();
  }
};
