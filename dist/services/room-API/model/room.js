"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCreateRoomInput = void 0;
const joi_1 = __importDefault(require("joi"));
const isValidCreateRoomInput = (data) => {
    const schema = joi_1.default.object({
        roomId: joi_1.default.string(),
        type: joi_1.default.string().required(),
        price: joi_1.default.number().required(),
    });
    const { error } = schema.validate(data);
    return !error;
};
exports.isValidCreateRoomInput = isValidCreateRoomInput;
