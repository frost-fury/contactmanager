import React from 'react';

export default props => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <h2>{props.match.params.id}</h2>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.1</p>
    </div>
  );
};
