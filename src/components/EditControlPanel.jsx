import React from "react";
import PropTypes from "prop-types";

export default function EditControlPanel({ whenEditClick, whenExitModal, whenDeleteClick, selectedProduct }) {
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
        onClick={() => whenDeleteClick(selectedProduct.id)}
        className="border px-2 py-2 rounded bg-amber-400 text-gray-50 hover:text-white hover:bg-amber-500 shadow"
      >
        Delete
      </button>
    </div>
  );
}
EditControlPanel.propTypes = {
  whenEditClick: PropTypes.func,
  whenExitModal: PropTypes.func,
  whenDeleteClick: PropTypes.func,
  selectedProduct: PropTypes.object,
};
