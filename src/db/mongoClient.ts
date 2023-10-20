import { MongoClient } from "mongodb";
import { Room } from "../models/room";
import { Booking } from "../models/booking";

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI

export const connectToDb = async () => {
  const client = new MongoClient(uri);
  await client.connect();
  client.close();
};

export const retrieveRoom = async (roomId: string): Promise<Room | null> => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("HotelDB");
  const collection = db.collection("rooms");
  const room = await collection.findOne({ roomId });
  client.close();
  if (!room) {
    throw new Error("Room not found");
  }
  return room;
};

export const retrieveBooking = async (
  bookingId: string
): Promise<Booking | null> => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("HotelDB");
  const collection = db.collection("bookings");
  const booking = await collection.findOne({ bookingId });
  client.close();
  if (!booking) {
    throw new Error("Booking not found");
  }
  return booking;
};

export const insertRoom = async (room: Room) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("HotelDB");
  const collection = db.collection("rooms");
  const result = await collection.insertOne(room);
  client.close();
  return result;
};

export const insertBooking = async (booking: Booking) => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("HotelDB");
  const collection = db.collection("bookings");
  const result = await collection.insertOne(booking);
  client.close();
  return result;
};
