import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <div>
      <button className="border px-3 py-2 rounded bg-blue-500 text-gray-100 hover:bg-blue-600" onClick={onClick}>{children}</button>
    </div>
  )
}
