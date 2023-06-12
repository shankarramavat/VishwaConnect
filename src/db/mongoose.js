const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL,//secure path 
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("MogoDB Connected successfully");
  }
);
