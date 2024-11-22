import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-banner bg-danger text-white py-2">
        <div className="container text-center">
          <span>BLACK NOVEMBER GIẢM TỚI 50%</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src="logo.png" alt="Canifa Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">BLACK NOVEMBER</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">NỮ</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">NAM</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">BÉ GÁI</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">BÉ TRAI</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">CANIFA S</a>
              </li>
            </ul>
            <div className="d-flex ms-3">
              <a href="#" className="btn btn-outline-primary me-2">Cửa hàng</a>
              <a href="#" className="btn btn-outline-primary me-2">Tài khoản</a>
              <a href="#" className="btn btn-outline-primary">Giỏ hàng</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="main-banner bg-dark text-white py-5">
        <div className="container text-center">
          <div className="banner-content">
            <h1 className="display-3">BLACK NOVEMBER</h1>
            <p className="lead">Giảm tới <span className="fw-bold">50%</span> sản phẩm thu đông</p>
            <p>
              <small>Online: 13/11 - 01/12 | Hệ thống: 15/11 - 01/12</small>
            </p>
            <button className="cta-button btn btn-danger btn-lg">Mua ngay</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
