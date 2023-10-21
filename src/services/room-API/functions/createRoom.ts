import MongoDbClient from "../../../db/mongoClient";
import { Room } from "../model/room";
import ksuid from "ksuid";

export const createRoom = async (input: any) => {
  const mongoClient = new MongoDbClient();
  try {
    await mongoClient.connectToDb();

    const roomId = input.roomId || ksuid.randomSync().string;

    const room: Room = {
      roomId,
      type: input.type,
      price: input.price,
    };

    await mongoClient.insertRoom(room);

    return {
      status: 200,
      body: {
        message: "Room successfully created",
        id: room.roomId,
      },
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
