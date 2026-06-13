export default function TaskCard({ task, onEdit, onDelete }) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  const statusColors = {
    pending: 'bg-slate-100 text-slate-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-slate-950">{task.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{task.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[task.status]}`}>
              {task.status}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${priorityColors[task.importance]}`}>
              {task.importance}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
            {task.assignedTo && (
              <div>
                <span className="font-medium">Assigned to:</span> {task.assignedTo}
              </div>
            )}
            {task.dueDate && (
              <div>
                <span className="font-medium">Due:</span> {task.dueDate}
              </div>
            )}
            {task.duration && (
              <div>
                <span className="font-medium">Duration:</span> {task.duration}h
              </div>
            )}
          </div>
        </div>

        <div className="ml-4 flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="rounded-lg p-2 text-slate-600 hover:bg-red-100 hover:text-red-600"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
