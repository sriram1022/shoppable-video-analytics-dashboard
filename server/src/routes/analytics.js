const express = require("express");
const db = require("../../database/db");

const router = express.Router();

router.get("/videos", (req, res) => {
  const videos = db.prepare(`
    SELECT
      videos.id,
      videos.title,

      COUNT(
        CASE
          WHEN engagement_events.event_type = 'view'
          THEN 1
        END
      ) AS views,

      COUNT(
        CASE
          WHEN engagement_events.event_type = 'click'
          THEN 1
        END
      ) AS clicks,

      COUNT(
        CASE
          WHEN engagement_events.event_type = 'add_to_cart'
          THEN 1
        END
      ) AS add_to_cart

    FROM videos

    LEFT JOIN engagement_events
      ON videos.id = engagement_events.video_id

    GROUP BY videos.id, videos.title

    ORDER BY videos.id
  `).all();

  res.json(videos);
});

module.exports = router;