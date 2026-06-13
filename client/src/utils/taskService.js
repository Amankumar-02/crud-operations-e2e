import { getAuthToken } from './authService.js';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const parseResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    const message = data?.error || 'An unexpected error occurred.';
    throw new Error(message);
  }
  return data;
};

const authHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined,
  };
};

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'GET',
    headers: authHeaders(),
  });
  return parseResponse(response);
};

export const createTask = async (task) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(task),
  });
  return parseResponse(response);
};

export const updateTask = async (taskId, task) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(task),
  });
  return parseResponse(response);
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return parseResponse(response);
};
