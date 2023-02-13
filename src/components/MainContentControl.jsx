import React from "react";
import PropTypes from "prop-types";

export default function MainContentControl({ displayForm, onFormDisplay }) {
  return (
    <div className="flex justify-center items-center px-5 space-x-2 mt-12">
      <button
        onClick={onFormDisplay}
        className="border px-2 py-2 rounded bg-amber-400 text-gray-50 hover:text-white hover:bg-amber-500 shadow"
      >
        {displayForm ? "Show Inventory" : "Add Product"}
      </button>
    </div>
  );
}

MainContentControl.propTypes = {
  displayForm: PropTypes.bool,
  onFormDisplay: PropTypes.func,
};
