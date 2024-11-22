import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-light border-end" id="sidebar-wrapper">
      <div className="sidebar-heading">E-Commerce</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Home</li>
        <li className="list-group-item">Products</li>
        <li className="list-group-item">Cart</li>
      </ul>
    </div>
  );
};

export default Sidebar;

