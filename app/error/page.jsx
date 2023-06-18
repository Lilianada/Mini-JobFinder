import React from 'react';
import './style.scss';

export default function Error() {
  return (
    <div className="error__component">
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-h1">404</h1>
          <div>
            <h2 className="error-h2">This page could not be found.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
