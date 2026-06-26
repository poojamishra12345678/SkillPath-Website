import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Page not found</h2>
        <p className="mt-4 text-lg text-gray-500 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
