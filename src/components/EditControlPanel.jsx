import React from "react";
import PropTypes from "prop-types";

export default function EditControlPanel({ whenEditClick, whenExitModal }) {
  const combinedFunction = () => {
    whenEditClick();
    whenExitModal();
  };

  return (
    <div className="space-x-1 text-center">
      <button
        onClick={combinedFunction}
        className="border px-4 py-2 rounded bg-amber-400 text-gray-50 hover:text-white hover:bg-amber-500 shadow"
      >
        Edit
      </button>
      <button
        disable="true"
        className="border px-2 py-2 rounded bg-amber-400 text-gray-50 hover:text-white hover:bg-amber-500 shadow cursor-not-allowed"
      >
        Delete
      </button>
    </div>
  );
}
EditControlPanel.propTypes = {
  whenEditClick: PropTypes.func,
  whenExitModal: PropTypes.func,
};
