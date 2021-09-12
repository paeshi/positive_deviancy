import React from "react";

// used in About component
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
