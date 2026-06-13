import { useState } from 'react';
import FormInput from './FormInput.jsx';
import FormButton from './FormButton.jsx';

export default function TaskForm({ task, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    task || {
      title: '',
      description: '',
      assignedTo: '',
      startDate: '',
      duration: '',
      dueDate: '',
      importance: 'medium',
      status: 'pending',
    }
  );
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Task Title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter task title"
        error={errors.title}
        required
      />

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows="3"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <FormInput
        label="Assign To"
        name="assignedTo"
        type="text"
        value={formData.assignedTo}
        onChange={handleChange}
        placeholder="Enter team member name"
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Start Date"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <FormInput
          label="Duration (hours)"
          name="duration"
          type="number"
          value={formData.duration}
          onChange={handleChange}
          placeholder="0"
          error={errors.duration}
          required
        />
      </div>

      <FormInput
        label="Due Date"
        name="dueDate"
        type="date"
        value={formData.dueDate}
        onChange={handleChange}
        error={errors.dueDate}
        required
      />

      <div>
        <label htmlFor="importance" className="block text-sm font-medium text-slate-700">
          Importance
        </label>
        <select
          id="importance"
          name="importance"
          value={formData.importance}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-slate-700">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="flex gap-3 pt-4">
        <FormButton type="submit">Create Task</FormButton>
        <FormButton type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </FormButton>
      </div>
    </form>
  );
}
