import axios from "axios";

const API_BASE_URL =
  "https://shoppable-video-analytics-dashboard.onrender.com/api";
 

export const getVideoAnalytics = async (page = 1, limit = 5) => {
  const response = await axios.get(
    `${API_BASE_URL}/analytics/videos`,
    {
      params: {
        page,
        limit,
      },
    }
  );

  return response.data;
};

export const createEvent = async (videoId, eventType) => {
  const response = await axios.post(
    `${API_BASE_URL}/events`,
    {
      videoId,
      eventType,
    }
  );

  return response.data;
};