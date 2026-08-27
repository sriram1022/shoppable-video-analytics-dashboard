const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/events");
const analyticsRouter = require("./routes/analytics");

const app = express();

app.use(cors());
app.use(express.json());



app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shoppable-video-analytics-dashboard.vercel.app"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Shoppable Video Analytics API is running",
  });
});


app.use("/api/events", eventsRouter);
app.use("/api/analytics", analyticsRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});