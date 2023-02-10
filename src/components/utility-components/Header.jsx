import React from 'react';

export default function Header({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
