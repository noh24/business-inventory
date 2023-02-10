import React from 'react';

export default function Button({ onClick, children, className }) {
  return (
    <div>
      <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}
