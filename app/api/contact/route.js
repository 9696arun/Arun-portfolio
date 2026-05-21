import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

async function connectDB() {

  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose.connect(MONGO_URI);

}

export async function POST(req) {

  try {

    await connectDB();

    const body = await req.json();

    await Contact.create(body);

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
    });

  }
}