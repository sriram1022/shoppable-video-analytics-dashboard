function VideoTable({ videos }) {
  return (
    <div className="table-shell">
      <div className="table-scroll">
        <table className="analytics-table">
          <thead>
            <tr>
              <th scope="col">Video</th>
              <th scope="col">Views</th>
              <th scope="col">Clicks</th>
              <th scope="col">Conversions</th>
              <th scope="col">Conversion Rate</th>
            </tr>
          </thead>

          <tbody>
            {videos.map((video) => {
              const conversionRate =
                video.views > 0
                  ? ((video.add_to_cart / video.views) * 100).toFixed(2)
                  : 0;

              return (
                <tr key={video.id}>
                  <td className="video-title">{video.title}</td>
                  <td className="number-cell">{video.views}</td>
                  <td className="number-cell">{video.clicks}</td>
                  <td className="number-cell">{video.add_to_cart}</td>
                  <td className="rate-cell">
                    <span className="rate-badge">{conversionRate}%</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VideoTable;