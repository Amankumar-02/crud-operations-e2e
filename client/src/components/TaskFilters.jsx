export default function TaskFilters({ filters, onFilterChange }) {
  const statusOptions = ['All', 'pending', 'in-progress', 'completed'];
  const priorityOptions = ['All', 'high', 'medium', 'low'];

  return (
    <div className="flex flex-wrap gap-4 rounded-lg bg-white p-4 shadow-sm">
      <div>
        <label className="text-sm font-medium text-slate-700">Status</label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="mt-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          {statusOptions.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">Priority</label>
        <select
          value={filters.importance}
          onChange={(e) => onFilterChange('importance', e.target.value)}
          className="mt-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          {priorityOptions.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">Search</label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          placeholder="Search tasks..."
          className="mt-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>
    </div>
  );
}
