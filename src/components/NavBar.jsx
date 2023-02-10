import React from 'react';

export default function NavBar({ children }) {
  return (
    <div className="flex space-x-1">
      {children}
    </div>
  )
}
