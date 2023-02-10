import React from 'react';

export default function Header({ children }) {
  return (
    <div className="outline flex justify-between items-center px-5">
      {children}
    </div>
  )
}
