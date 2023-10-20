import Joi from "joi";

export interface Booking {
  bookingId: string;
  date: Date;
  roomId: string;
}

export const isValidCreateBookingInput = (data: any) => {
  const schema = Joi.object({
    bookingId: Joi.string().required(),
    date: Joi.date().required(),
    roomId: Joi.string().required(),
  });

  const { error } = schema.validate(data);
  return !error;
};
