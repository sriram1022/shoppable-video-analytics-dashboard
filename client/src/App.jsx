import { useEffect, useState } from "react";
import "./App.css";
import { createEvent, getVideoAnalytics } from "./services/api";
import VideoTable from "./component/VideoTable";
import Pagination from "./component/Pagination";
import SimulateTrafficButton from "./component/SimulateTrafficButton";

function App() {
  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [simulationLoading, setSimulationLoading] = useState(false);

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

  const handleSimulateTraffic = async () => {
  if (videos.length === 0) {
    return;
  }

  try {
    setSimulationLoading(true);

    
    const randomVideo =
      videos[Math.floor(Math.random() * videos.length)];

   
    const eventTypes = [
      "view",
      "click",
      "add_to_cart",
    ];

    
    const randomEventType =
      eventTypes[
        Math.floor(Math.random() * eventTypes.length)
      ];

    
    await createEvent(
      randomVideo.id,
      randomEventType
    );

    
    await fetchAnalytics();
  } catch (error) {
    console.error("Failed to simulate traffic", error);
  } finally {
    setSimulationLoading(false);
  }
};

  

  if (loading) {
    return <h2>Loading analytics...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Shoppable Video Analytics Dashboard</h1>

      <SimulateTrafficButton
      onSimulate={handleSimulateTraffic}
      loading={simulationLoading}
    />

      <VideoTable videos={videos} />
      <Pagination
  pagination={pagination}
  onPageChange={setPage}
/>
    </div>
  );
}

export default App;