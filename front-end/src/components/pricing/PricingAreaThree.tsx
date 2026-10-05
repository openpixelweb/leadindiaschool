import { Link } from "react-router-dom";

interface PricingAreaThreeProps {
  style_2?: boolean;
}

export default function PricingAreaThree({ style_2 }: PricingAreaThreeProps) {
  return (
    <>
      {/* <!-- Pricing Section Start --> */}
      <section className={`pricing-plan-section3 section-padding fix ${style_2 ? "bg-similar-testi" : ""}`}>
        <div className="container pb-lg-2 pb-4">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="sub__warning  mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Our Prices
                </div>
                <h2 className="text-white black fw-bold d-block">
                  Affordable & {' '}
                  <span className="position-relative text-theme03 title-ele3">
                    Flexible
                    <img src="assets/img/element/text-ele003.png" alt="img" />
                  </span>
                 {" "} Nanny Plans
                </h2>
              </div>
            </div>
            <div className="">
              <Link to="/event" className="common_btn text-nowrap">
                View All Plans
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style1 wow fadeInUp" data-wow-delay="0.3s">
                <img src="assets/img/element/price-item-shape3.png" alt="img"
                  className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head mb-1 text-center">
                    <h3>Part-Time Nanny</h3>
                  </div>
                  <div className="unit-prices border-bottom pb-4 mb-4">
                    <h4 className="d-flex justify-content-center align-items-end gap-1 fs-3 fw-bold text-theme">
                      $99
                      <span className="fw-normal pra-clr mb-1 lh-sm d-block">/Monthly</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      3–4 hours per day
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Light childcare tasks
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Playtime & basic learning
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Perfect for busy mornings & after
                    </div>
                  </div>
                  <div className="text-start">
                    <Link to="/contact" className="common_btn common_btn_outline text-nowrap">
                      Choose Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style1 wow fadeInUp" data-wow-delay="0.5s">
                <img src="assets/img/element/price-item-shape3-active.png" alt="img"
                  className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head mb-1 text-center">
                    <h3>Full-Time Nanny</h3>
                  </div>
                  <div className="unit-prices border-bottom pb-4 mb-4">
                    <h4 className="d-flex justify-content-center align-items-end gap-1 fs-3 fw-bold text-theme">
                      $149
                      <span className="fw-normal pra-clr mb-1 lh-sm d-block">/Monthly</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      6–8 hours per day
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Complete childcare support
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Structured activities & routines
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Meal prep + nap supervision
                    </div>
                  </div>
                  <div className="text-start">
                    <Link to="/contact" className="common_btn text-nowrap">
                      Choose Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style1 wow fadeInUp" data-wow-delay="0.7s">
                <img src="assets/img/element/price-item-shape3.png" alt="img"
                  className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head mb-1 text-center">
                    <h3>Live-In Nanny</h3>
                  </div>
                  <div className="unit-prices border-bottom pb-4 mb-4">
                    <h4 className="d-flex justify-content-center align-items-end gap-1 fs-3 fw-bold text-theme">
                      $180
                      <span className="fw-normal pra-clr mb-1 lh-sm d-block">/Monthly</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      24/7 care & supervision
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Full household childcare support
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Early learning activities
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <img src="assets/img/icon/check-badge.png" alt="img" />
                      Ideal for working parents
                    </div>
                  </div>
                  <div className="text-start">
                    <Link to="/contact" className="common_btn common_btn_outline text-nowrap">
                      Choose Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
