import { Link } from "react-router-dom";


export default function FooterFour() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section space-top footer-style2 footer-style4 fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5 col-sm-6">
              <div className="footer-top-left wow fadeInUp" data-wow-delay="0.3s">
                <Link to="/" className="footer-logo d-block mb-2 pb-1">
                  <img src="assets/img/logo/logo-black.png" alt="logo" />
                </Link>
                <p className="pra">
                  BrightPath Preschool provides a caring, creative, and safe learning environment where
                  children grow through play,
                  exploration, and early education.
                </p>
                <div className="text-social">
                  <a href="#">
                    Facebook
                  </a>
                  <a href="#">
                    twitter
                  </a>
                  <a href="#">
                    linkedin
                  </a>
                  <a href="#">
                    youtube
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="mb-xxl-4 mb-3 text-dark">Our Programs</h3>
                <ul className="footer-widget-link">
                  <li>
                    <Link to="/program">
                      <i className="fas fa-angle-double-right"></i> Preschool Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">
                      <i className="fas fa-angle-double-right"></i> Kindergarten Readiness
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">
                      <i className="fas fa-angle-double-right"></i> Creative Arts
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">
                      <i className="fas fa-angle-double-right"></i> Language & Literacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">
                      <i className="fas fa-angle-double-right"></i> Outdoor Activities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="footer-widget wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="mb-xxl-4 mb-3 text-dark">Contact Information</h3>
                <ul className="footer-widget-info">
                  <li>
                    Address:
                    <a href="#">
                      45 Green Valley Road, Central Education District, Your City
                    </a>
                  </li>
                  <li>
                    Phone:
                    <a href="#">
                      +1 (000) 123-4567 , +5 392 (8356) 457
                    </a>
                  </li>
                  <li>
                    Send Message:
                    <a href="#">
                      info@kinezpreschool.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center space-top">
            <p className="text-dark fw-medium wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()} <a href="#" className="text-p1">kinez.</a> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><img src="assets/img/footer/footer-shape2.png" alt="img"
          className="object-fit-cover w-100" /></div>
        <img src="assets/img/footer/footer-horse.png" alt="img" className="footer-shot bob-x d-lg-block d-none" />
        <img src="assets/img/footer/footer-shot2.png" alt="img" className="footer-estrue updowns d-sm-block d-none" />
        <img src="assets/img/footer/footer-plan.png" alt="img" className="footer-plan bob-x d-lg-block d-none" />
      </footer>
    </>
  )
}
