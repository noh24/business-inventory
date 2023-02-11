import React from "react";
import PropTypes from 'prop-types'

export default function EditControlPanel({ whenEditClick, whenExitModal }) {

  const combinedFunction = () => {
    whenEditClick();
    whenExitModal();
  }

  return (
    <div className="space-x-1 text-center">
      <button className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 focus:outline-none shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <button onClick={combinedFunction} className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 focus:outline-none shadow">
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <button className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 focus:outline-none shadow">
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
EditControlPanel.propTypes = {
  whenEditClick: PropTypes.func,
  whenExitModal: PropTypes.func,
}