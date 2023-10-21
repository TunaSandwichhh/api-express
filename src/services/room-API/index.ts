import { createRoom, getRoom } from "./services/room-API/functions";

export const handleRequest = async (req: any, res: any) => {
  const { url, body, query } = req;

  switch (url) {
    case "/rooms":
      const roomResponse = await createRoom(body);
      return res.status(roomResponse.status).json(roomResponse.body);

    case "/rooms/{id}":
      const room = await getRoom(query.roomId);
      return res.status(room.status).json(room.body);

    default:
      return res.status(404).json({ message: "Endpoint not found" });
  }
};
