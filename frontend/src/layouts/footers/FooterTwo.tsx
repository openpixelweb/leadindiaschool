import { Link } from "react-router-dom";

export default function FooterTwo() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-style2 fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5 col-sm-6">
              <div className="footer-top-left wow fadeInUp" data-wow-delay="0.3s">
                <Link to="/" className="footer-logo d-block mb-2 pb-1">
                  <img src="assets/img/logo/lead-india-logo.png" alt="Lead India Bharat Ratnas School logo" />
                </Link>
                <p className="pra">
                  we are committed to creating a supportive learning environment where students can build strong academic foundations, discover their potential and grow with confidence and values.
                </p>
                   <div className="social-area">
                  <div className="d-flex line-area text-dark">
                    Join Social:
                  </div>
                  <div className="social-icon d-flex gap-xxl-3 gap-xl-2 gap-1 align-items-center">
                    <a href="#" className="icon sub-font"><i
                      className="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="icon sub-font"><i
                      className="fa-brands fa-instagram"></i> </a>
                    <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="mb-xxl-4 mb-3">Quick Links</h3>
                <ul className="footer-widget-link">
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Academics
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Admissions
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Gallery 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="footer-widget wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="mb-xxl-4 mb-3">Contact Information</h3>
                <ul className="footer-widget-info">
                  <li>
                    Address:
                    <a href="#">
                      
Bandlaguda, Keesara

Hyderabad, TS 501318
                    </a>
                  </li>
                  <li>
                    Phone:
                    <a href="tel:+919010325325">
                      +91 9010 325 325
                    </a>
                  </li>
                  <li>
                    Send Message:
                    <a href="mailto:info@librs.in">
                      info@librs.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p className="wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()} All Rights Reserved by Lead India Bharat Ratnas School
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><img src="assets/img/footer/footre-down.png" alt="img"
          className="object-fit-cover w-100" /></div>
        <img src="assets/img/footer/footer-horse.png" alt="img" className="footer-estrue updowns d-sm-block d-none" />
        {/* <img src="assets/img/footer/footer-shot2.png" alt="img" className="footer-estrue updowns d-sm-block d-none" /> */}
        {/* <img src="assets/img/footer/footer-plan.png" alt="img" className="footer-plan bob-x d-lg-block d-none" /> */}
      </footer>

    </>
  )
}
