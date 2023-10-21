import { Router } from "express";
import { createRoom } from "./functions/createRoom";
import { getRoom } from "./functions/getRoom";
import { validateRoom } from "../middleware/validateRoom";

const router = Router();

router.post("/", validateRoom, async (req, res) => {
  const { body } = req;
  const roomResponse = await createRoom(body);
  return res.status(roomResponse.status).json(roomResponse.body);
});

router.get("/:id", async (req, res) => {
  const roomId = req.params.id;
  const room = await getRoom(roomId);
  return res.status(room.status).json(room.body);
});

export default router;
