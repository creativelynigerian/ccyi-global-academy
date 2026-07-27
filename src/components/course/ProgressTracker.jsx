function ProgressTracker({ completed, total }) {
  const percentage =
    total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="mb-2 flex justify-between">
        <h3 className="font-semibold">Course Progress</h3>
        <span>{percentage}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-700 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressTracker;