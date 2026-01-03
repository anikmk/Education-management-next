'use client'; 

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="">
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">

            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          {/* Icon */}
          <div className="text-red-500 text-5xl mb-4">⚠️</div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Something went wrong
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            An unexpected error occurred. Please try again.
          </p>

          {/* Retry Button */}
          <button
            onClick={() => reset()}
            className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded transition"
          >
            Try Again
          </button>

          {/* Error message (only for development) */}
          {process.env.NODE_ENV === "development" && (
            <pre className="mt-4 text-xs text-red-600 bg-red-50 p-3 rounded text-left overflow-auto">
              {error?.message}
            </pre>
          )}
        </div>

        </div>
      </body>
    </html>
  );
}
