 
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Offcanvas from "../../components/common/Offcanvas";



export default function HeaderOne() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);



  return (
    <>
      {/* <!-- Header Top Section Start --> */}
      <div className="header-top-section">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fas fa-phone p2-clr"></i>
                <a href="tel:+91 9010325325">+91 9010325325</a>
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope p2-clr"></i>
                <a href="mailto:info@librs.in" className="link">info@librs.in</a>
              </li>
            </ul>
            <p className="d-xl-block d-none">
              Admissions Open 2027–28 — Start Your Child's LIBR Journey
            </p>
            <div className="header-top-social d-flex align-items-center">
              <p className="fw-semibold text-white">
                Follow On:
              </p>
                 <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i> </a>
           
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header-style1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="/assets/img/logo/lead-india-logo.png" alt="Lead India Bharat Ratnas School logo" />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                   <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
             
                <Link to="/" className="common_btn text-nowrap">
                  Contact Us
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="/assets/img/icon/menu.png" alt="icon" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
     
    </>
  )
}
