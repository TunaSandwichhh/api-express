import { MongoClient, Document, Collection } from "mongodb";

class MongoDbClient {
  private readonly uri: string = "your_mongodb_uri";
  private readonly dbName: string = "your_database_name";
  private client: MongoClient;

  async connectToDb(): Promise<void> {
    this.client = new MongoClient(this.uri);
    await this.client.connect();
  }

  async retrieveBookingsByRoomAndDate(
    roomId: string,
    date: Date
  ): Promise<any[]> {
    const db = this.client.db(this.dbName);
    const bookingsCollection: Collection = db.collection("bookings");

    const query = {
      roomId: roomId,
      date: date,
    };

    const bookings = await bookingsCollection.find(query).toArray();
    return bookings;
  }

  async retrieveRoom(roomId: string): Promise<Document | null> {
    const collection = this.client.db(this.dbName).collection("rooms");
    const room = await collection.findOne({ roomId });
    return room;
  }

  async retrieveBooking(bookingId: string): Promise<Document | null> {
    const collection = this.client.db(this.dbName).collection("bookings");
    const booking = await collection.findOne({ bookingId });
    return booking;
  }

  async insertRoom(room: Document): Promise<void> {
    const collection = this.client.db(this.dbName).collection("rooms");
    await collection.insertOne(room);
  }

  async insertBooking(booking: Document): Promise<void> {
    const collection = this.client.db(this.dbName).collection("bookings");
    await collection.insertOne(booking);
  }

  async closeConnection(): Promise<void> {
    if (this.client) {
      await this.client.close();
    }
  }
}

export default MongoDbClient;
