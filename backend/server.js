const feedbackRouter = require("./routes/feedback");
const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use("/feedbacks", feedbackRouter);

app.listen(5000, () => console.log("Server is running at port 5000..."));
