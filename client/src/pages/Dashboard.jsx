import { useState, useEffect, useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Modal from '../components/Modal.jsx';
import TaskForm from '../components/TaskForm.jsx';
import TaskCard from '../components/TaskCard.jsx';
import TaskFilters from '../components/TaskFilters.jsx';
import { createTask, getTasks, updateTask, deleteTask } from '../utils/taskService.js';

export default function Dashboard() {
  const { isOpen } = useContext(SidebarContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    importance: 'all',
    search: '',
  });

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      setIsLoading(true);
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message || 'Failed to load tasks.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesImportance = filters.importance === 'all' || task.importance === filters.importance;
    const matchesSearch =
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesImportance && matchesSearch;
  });

  const handleCreateTask = async (formData) => {
    try {
      if (editingTask) {
        const updatedTask = await updateTask(editingTask._id, formData);
        setTasks((prev) => prev.map((t) => (t._id === editingTask._id ? updatedTask : t)));
        setEditingTask(null);
      } else {
        const createdTask = await createTask(formData);
        setTasks((prev) => [createdTask, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err) {
      setError(err.message || 'Failed to save task.');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete task.');
    }
  };

  const handleOpenModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <main className={`flex-1 overflow-y-auto transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="space-y-6 p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-950">Dashboard</h1>
              <p className="mt-1 text-slate-600">Manage and track your tasks</p>
            </div>
            <button
              onClick={handleOpenModal}
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              + Create New
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Total Tasks</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{tasks.length}</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">In Progress</p>
              <p className="mt-2 text-3xl font-semibold text-blue-600">
                {tasks.filter((t) => t.status === 'in-progress').length}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Completed</p>
              <p className="mt-2 text-3xl font-semibold text-green-600">
                {tasks.filter((t) => t.status === 'completed').length}
              </p>
            </div>
          </div>

          {/* Filters */}
          <TaskFilters filters={filters} onFilterChange={handleFilterChange} />

          {/* Tasks List */}
          <div className="space-y-4">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                />
              ))
            ) : (
              <div className="rounded-lg bg-white p-12 text-center shadow-sm">
                <p className="text-slate-600">No tasks found</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      >
        <TaskForm task={editingTask} onSubmit={handleCreateTask} onCancel={handleCloseModal} />
      </Modal>
    </div>
  );
}
