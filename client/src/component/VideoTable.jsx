function VideoTable({ videos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Video</th>
          <th>Views</th>
          <th>Clicks</th>
          <th>Conversions</th>
          <th>Conversion Rate</th>
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
              <td>{video.title}</td>

              <td>{video.views}</td>

              <td>{video.clicks}</td>

              <td>{video.add_to_cart}</td>

              <td>{conversionRate}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default VideoTable;