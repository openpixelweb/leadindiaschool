
import { useState } from "react";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import UseSticky from "../../hooks/UseSticky";
import Offcanvas from "../../components/common/Offcanvas";
import SearchArea from "../../components/common/SearchArea";


export default function HeaderThree() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      {/* <!-- Header Top Section Start --> */}
      <div className="header-top-section header-top-style3">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fas fa-phone"></i>
                (705) 569-0123
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="#" className="link">info@example.com</a>
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <a href="#" className="link">6391 Elgin St. Celina, USA</a>
              </li>
            </ul>
            <div className="header-top-social d-flex align-items-center">
              <a href="#" className="fw-semibold pra-clr">
                Follow On:
              </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i> </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header-section-style3 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo d-xl-none d-block">
                <img src="assets/img/logo/logo.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <Link to="/" className="header-logo d-xl-block d-none me-4">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
                <a style={{ cursor: 'pointer' }} onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon">
                  <i className="fa-solid fa-magnifying-glass fs-6 text-white"></i>
                </a>
                <a href="#" className="shop_cart">
                  <img src="assets/img/icon/cart_icon.png" alt="img" />
                </a>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/menu.png" alt="icon" className="filter-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />



    </>
  )
}
