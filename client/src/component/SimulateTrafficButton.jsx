function SimulateTrafficButton({ onSimulate, loading }) {
  return (
    <button
      onClick={onSimulate}
      disabled={loading}
    >
      {loading ? "Simulating..." : "Simulate Traffic"}
    </button>
  );
}

export default SimulateTrafficButton;