import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <FiAlertTriangle className="text-red-500 text-9xl mb-4" />
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
