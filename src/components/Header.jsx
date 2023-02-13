import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}