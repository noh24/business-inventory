import React from "react";
import PropTypes from "prop-types";

export default function MainContentControl({ displayForm, onFormDisplay }) {
  return (
    <div className="flex justify-center items-center px-5 space-x-2">
      <button
        onClick={onFormDisplay}
        className="border px-2 py-1 rounded bg-blue-500 text-gray-100 hover:bg-blue-600 shadow"
      >
        {displayForm ? "Show Inventory" : "Add Product"}
      </button>
    </div>
  );
}

MainContentControl.propTypes = {
  onFormDisplay: PropTypes.func,
};
