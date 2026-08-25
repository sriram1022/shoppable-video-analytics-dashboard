import { useEffect, useState } from "react";
import { getVideoAnalytics } from "./services/api";
import VideoTable from "./component/VideoTable";
import Pagination from "./component/Pagination";

function App() {
  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const limit = 5;

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getVideoAnalytics(page, limit);

      setVideos(data.data);
      setPagination(data.pagination);
    } catch (error) {
      setError("Failed to fetch analytics data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [page]);

  if (loading) {
    return <h2>Loading analytics...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Shoppable Video Analytics Dashboard</h1>

      <VideoTable videos={videos} />
      <Pagination
  pagination={pagination}
  onPageChange={setPage}
/>
    </div>
  );
}

export default App;