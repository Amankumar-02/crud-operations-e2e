const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const parseResponse = async (response) => {
  let data = null;
  try {
    data = await response.json();
  } catch (e) {
    // non-JSON response
    const text = await response.text().catch(() => null);
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText} - ${text || 'no body'}`);
    return text;
  }

  if (!response.ok) {
    const message = data?.error || data?.message || `HTTP ${response.status} ${response.statusText}`;
    const err = new Error(message);
    err.status = response.status;
    err.payload = data;
    throw err;
  }

  return data;
};

export const signup = async ({ fullName, email, password }) => {
  const response = await fetch(`${API_BASE_URL}/api/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, email, password }),
  });
  return parseResponse(response);
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return parseResponse(response);
};

export const logout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return parseResponse(response);
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const saveAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('taskflow_token', token);
  }
};

export const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('taskflow_token');
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('taskflow_token');
  }
};

export const getProfile = async () => {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return parseResponse(response);
};

export const updateProfile = async ({ name, email }) => {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ name, email }),
  });
  return parseResponse(response);
};

// Decode JWT payload (without verifying) to extract basic user info client-side.
export const getUserFromToken = () => {
  const token = getAuthToken();
  if (!token) return null;
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = parts[1];
    // base64url -> base64
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const obj = JSON.parse(json);
    return { id: obj.id || obj.sub || null, name: obj.name || null, email: obj.email || null };
  } catch (err) {
    console.error('Failed to decode token', err);
    return null;
  }
};
