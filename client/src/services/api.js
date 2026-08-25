import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

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