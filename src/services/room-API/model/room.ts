import Joi from "joi";

export interface Room {
  roomId: string;
  type: string;
  price: number;
}

export const isValidCreateRoomInput = (data: any) => {
  const schema = Joi.object({
    roomId: Joi.string(),
    type: Joi.string().required(),
    price: Joi.number().required(),
  });

  const { error } = schema.validate(data);
  return !error;
};
