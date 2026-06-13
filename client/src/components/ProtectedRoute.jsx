import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../utils/authService.js';

export function ProtectedRoute({ children }) {
  const token = getAuthToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export function PublicAuthRoute({ children }) {
  const token = getAuthToken();
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
