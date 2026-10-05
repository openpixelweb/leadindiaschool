
import { Link } from "react-router-dom";
import MobileMenu from "../../layouts/headers/MobileMenu";

interface OffCanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}

export default function Offcanvas({ offCanvasOpen, setOffCanvasOpen }: OffCanvasProps) {
  return (
    <>
      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area">
        <div className={`offcanvas__info ${offCanvasOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <Link to="/" className="offcanvas__logo">
                  <img src="assets/img/logo/lead-india-logo.png" alt="Libr logo" />
                </Link>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvasOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4 className="fw_600">Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt fs-five"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" className="fs-eight">Sy. No: 77, 78, 79, Ahmedguda (Bandlaguda) Village,
Keesara (Mandal), Medchal (Dist),
Hyderabad-501318</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+91 9010325325">+91 9010325325</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@librs.in">info@librs.in</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
               
                  {/* <!-- End info --> */}

                </ul>
{/*               
                <div
                  className="header-top-social mt-5 d-grid flex-column gap-2 justify-content-start align-items-center">
                  <a href="#" className="sub-font"><i className="fa-brands fa-facebook"></i>
                    Facebook</a>
                  <a href="#" className="sub-font"><i className="fa-brands fa-twitter"></i>
                    Twitter</a>
                  <a href="#" className="sub-font"><i className="fa-brands fa-linkedin"></i>
                    Linkedin</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${offCanvasOpen ? 'overlay-open' : ''}`} onClick={() => setOffCanvasOpen(false)}></div>
    </>
  )
}
