import MongoDbClient from "../../db/mongoClient";

export const getRoom = async (roomId: string) => {
  const dbClient = new MongoDbClient();

  try {
    await dbClient.connectToDb();
    const room = await dbClient.retrieveRoom(roomId);

    if (!room) {
      return {
        status: 404,
        body: { error: "Room not found" },
      };
    }

    return {
      status: 200,
      body: { room },
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
