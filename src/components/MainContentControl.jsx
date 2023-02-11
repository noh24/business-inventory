import React from "react";
import PropTypes from 'prop-types';

export default function MainContentControl({ displayList, onToggleDisplay, onFormDisplay }) {
  return (
    <div className="flex justify-center items-center px-5 space-x-2">
      {displayList ? (
        <button
          onClick={onToggleDisplay}
          className="rounded px-2 py-1 bg-blue-500 text-gray-100 hover:bg-blue-600 shadow "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={onToggleDisplay}
          className="border rounded px-2 py-1 bg-blue-500 text-gray-100 hover:bg-blue-600 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      <button onClick={onFormDisplay} className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

MainContentControl.propTypes = {
  displayList: PropTypes.array,
  onToggleDisplay: PropTypes.func,
  onFormDisplay: PropTypes.func,
}