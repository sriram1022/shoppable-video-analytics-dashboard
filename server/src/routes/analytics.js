const express = require("express");
const db = require("../../database/db");

const router = express.Router();

router.get("/videos", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  if (
    !Number.isInteger(page) ||
    !Number.isInteger(limit) ||
    page < 1 ||
    limit < 1
  ) {
    return res.status(400).json({
      message: "Page and limit must be positive integers",
    });
  }

  if (limit > 100) {
    return res.status(400).json({
      message: "Limit cannot be greater than 100",
    });
  }

  const offset = (page - 1) * limit;

  const totalResult = db
    .prepare(`
      SELECT COUNT(*) AS total
      FROM videos
    `)
    .get();

  const total = totalResult.total;

  const totalPages = Math.ceil(total / limit);

  const videos = db
    .prepare(`
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

      LIMIT ?
      OFFSET ?
    `)
    .all(limit, offset);

  return res.status(200).json({
    data: videos,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  });
});

module.exports = router;