import { createBooking, getBooking } from "./services/booking-API/functions";

export const handleRequest = async (req: any, res: any) => {
  const { url, body, query } = req;

  switch (url) {
    case "/bookings":
      const bookingResponse = await createBooking(body);
      return res.status(bookingResponse.status).json(bookingResponse.body);

    case "/bookings/{id}":
      const booking = await getBooking(query.bookingId);
      return res.status(booking.status).json(booking.body);

    default:
      return res.status(404).json({ message: "Endpoint not found" });
  }
};
