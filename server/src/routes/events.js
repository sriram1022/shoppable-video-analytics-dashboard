const express = require("express");
const db = require("../../database/db");

const router = express.Router();

router.post("/", (req, res) => {
  const { videoId, eventType } = req.body;

  const validEventTypes = [
    "view",
    "click",
    "add_to_cart",
  ];

  
  if (!videoId || !eventType) {
    return res.status(400).json({
      message: "videoId and eventType are required",
    });
  }

  if (!validEventTypes.includes(eventType)) {
    return res.status(400).json({
      message:
        "eventType must be view, click, or add_to_cart",
    });
  }

  
  const video = db
    .prepare("SELECT id FROM videos WHERE id = ?")
    .get(videoId);

  if (!video) {
    return res.status(404).json({
      message: "Video not found",
    });
  }

  
  const result = db
    .prepare(`
      INSERT INTO engagement_events (
        video_id,
        event_type
      )
      VALUES (?, ?)
    `)
    .run(videoId, eventType);

  return res.status(201).json({
    message: "Event created successfully",
    eventId: result.lastInsertRowid,
  });
});

module.exports = router;