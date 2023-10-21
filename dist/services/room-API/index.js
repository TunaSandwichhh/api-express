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
const express_1 = require("express");
const createRoom_1 = require("./functions/createRoom");
const getRoom_1 = require("./functions/getRoom");
const validateRoom_1 = require("../middleware/validateRoom");
const router = (0, express_1.Router)();
router.post("/", validateRoom_1.validateRoom, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const roomResponse = yield (0, createRoom_1.createRoom)(body);
    return res.status(roomResponse.status).json(roomResponse.body);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.id;
    const room = yield (0, getRoom_1.getRoom)(roomId);
    return res.status(room.status).json(room.body);
}));
exports.default = router;
