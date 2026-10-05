
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Offcanvas from "../../components/common/Offcanvas";
import SearchArea from "../../components/common/SearchArea";
export default function HeaderFour() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      {/* <!-- Header Top Section Start --> */}
      <div className="header-top-section header-top-section4">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fas fa-phone p2-clr"></i>
                (705) 569-0123
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope p2-clr"></i>
                <a href="#" className="link">support@littlekidskinez.com</a>
              </li>
            </ul>
            <p className="d-xl-block d-none">
              A Safe, Joyful Place for Early Childhood kinez – <a href="#">Learn More</a>
            </p>
            <div className="header-top-social d-flex align-items-center">
              <a href="#" className="fw-semibold text-white">
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
      <header id="header-sticky" className={`header-section header-section-style4 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="assets/img/logo/logo-black.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a style={{cursor: 'pointer'}} onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <Link to="/contact" className="common_btn d-sm-flex d-none text-nowrap">
                  start learning
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/menu.png" alt="icon" />
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
