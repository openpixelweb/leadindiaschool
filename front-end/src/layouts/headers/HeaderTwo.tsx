
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Offcanvas from "../../components/common/Offcanvas";
import SearchArea from "../../components/common/SearchArea";


export default function HeaderTwo() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section top-0 header-style1 header-style2 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
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
                <a style={{ cursor: 'pointer' }} onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon">
                  <i className="fa-solid fa-magnifying-glass fs-6 text-white"></i>
                </a>
                <Link to="/contact" className="common_btn d-sm-flex d-none text-nowrap">
                  start learning
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <div className="header__hamburger d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/menu.png" alt="icon" className="filter-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/header-bg2.png" alt="img" className="header-bg" />
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />


    </>
  )
}
