import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 text-lg mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-sm text-gray-500 italic mb-6">
          {error.statusText || error.message}
        </p>
        <Link to="/">
          <button className="btn btn-error">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
