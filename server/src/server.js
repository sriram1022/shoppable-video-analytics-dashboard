const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/events");
const analyticsRouter = require("./routes/analytics");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/events", eventsRouter);
app.use("/api/analytics", analyticsRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Shoppable Video Analytics API is running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});