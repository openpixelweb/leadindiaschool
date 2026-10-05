import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-style1 fix">
        <div className="thumb-shape-top"><img src="assets/img/footer/footer-shape-top.png" alt="img"
          className="w-100 object-fit-cover" /></div>
        <div className="container">
          <div
            className="footer-top-area d-flex justify-content-between flex-md-nowrap flex-wrap gap-3 position-relative">
            <div className="footer-top-left">
              <Link to="/" className="footer-logo d-block mb-2">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </Link>
              <p className="pra white-clr">
                Little Kids Kinez provides a safe, fun, and nurturing environment for children to learn, grow,
                and explore.
              </p>
            </div>
            <div className="social-wrap01 gap-xl-3 gap-2 d-flex align-items-center">
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-vimeo-v"></i>
              </a>
            </div>
          </div>
          <div className="footer-line">
            <img src="assets/img/footer/line-f.png" alt="img" className="w-100" />
          </div>
          <div className="row g-md-4 g-3 justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Our Location</span>
                <a href="#;" className="text-break">
                  123 Rainbow Street, New Yark City
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Email Address</span>
                <a href="#;" className="text-break">
                  support@littlekidskinez.com
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Call for inquiries</span>
                <a href="#;" className="text-break">
                  +56 896-5663 , 045 666 7043
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Days Open</span>
                <a href="#;" className="text-break">
                  Sun – Thu , (Closed: Fri & Satu)
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom justify-content-between flex-md-nowrap flex-wrap gap-3">
            <div className="footer-bottom-link d-flex align-items-center flex-wrap">
              <Link to="/">
                Home
              </Link>
              <Link to="/about">
                About Us
              </Link>
              <Link to="/comming-soon">
                Pages
              </Link>
              <Link to="/program">
                Programs
              </Link>
              <Link to="/blog">
                Blog
              </Link>
              <Link to="/contact">
                Contact us
              </Link>
            </div>
            <p className="text-white wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()} <a href="#" className="text-p1">kinez.</a> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><img src="assets/img/footer/footer-shape-bottom.png" alt="img"
          className="object-fit-cover w-100" /></div>
        <img src="assets/img/footer/f-shot.png" alt="img" className="footer-shot d-xxl-block d-none" />
        <img src="assets/img/footer/footer-shape1.png" alt="img" className="footer-estrue d-xxl-block d-none" />
      </footer>
    </>
  )
}
