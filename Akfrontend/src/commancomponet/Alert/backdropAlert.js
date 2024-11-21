import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BackdropAlert({show, closeAlert, varient, message}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {/* Backdrop overlay */}
      {show && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1040, // Ensures it stays above other elements
          }}
          onClick={closeAlert} // Close alert on backdrop click
        >
          {/* Alert box */}
          <div
            className={`alert ${varient === 'success' ? 'alert-success' : varient === 'danger' && 'alert-danger'}`}
            role="alert"
            style={{
              zIndex: 1050, // Keeps alert above backdrop
              width: '80%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            {message}
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={closeAlert}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BackdropAlert;
