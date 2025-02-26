const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/tranquilstay";

main() 
.then(() => {
  console.log("connected to DB");
})
.catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "67b8bd9c07ac00e91a6240c0"}))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();