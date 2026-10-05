import { Link } from "react-router-dom";


export default function AboutAreaThree() {
  return (
    <>
      {/* <!-- about Section Start --> */}
      <div className="addmissions-section4 bg-white section-padding position-relative fix z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="choose-thumb-wap about-thumb4 position-relative">
                <div className="thumb w-100 overflow-hidden">
                  <img src="assets/img/about/about-thumb4.png" alt="img" className="overflow-hidden" />
                </div>
                <img src="assets/img/about/about-dool.png" alt="img" className="doll updowns" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sassion-content sassion-content2 ">
                <div className="section-title-area border-bottom pb-3 mb-48 align-items-end justify-content-center">
                  <div className="section-title">
                    <div className="sub__text-p1 mb-3 wow fadeInUp" data-wow-delay=".3s">
                      Caring • Professional • Trusted
                    </div>
                    <h2 className="text-dark black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
                      Your
                      <span className="position-relative text-theme title-ele3">
                        Family’s
                        <img src="assets/img/element/title-ele3.png" alt="img" />
                      </span>
                      Trusted Childcare Partner
                    </h2>
                    <p className="border-0 pb-xl-1 pb-0 mb-4">
                      We provide experienced, trained, and caring nannies committed to offering safe,
                      personalized, and nurturing childcare.
                      Our focus is to support your child’s emotional, social, and educational growth
                    </p>
                    <div className="d-flex gap-xxl-5 gap-lg-4 gap-3 mb-lg-4 mb-3">
                      <div className="user-thumb-area-grop d-flex align-items-center gap-xxl-2 gap-2">
                        <div className="cont-in d-center position-relative">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M48 31.7023C48 44.9572 36.7422 48 23.6697 48C10.5973 48 0 37.2548 0 24C0 10.7452 10.5973 0 23.6697 0C36.7422 0 48 18.4475 48 31.7023Z"
                              fill="#6754E9" />
                          </svg>
                          <div className="count-in position-absolute d-flex align-items-center gap-0 ">
                            <span className="count">21</span>
                            +
                          </div>
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name mb-0">
                            Certified & <br /> background-checked
                          </div>
                        </div>
                      </div>
                      <div className="user-thumb-area-grop d-flex align-items-center gap-xxl-2 gap-2">
                        <div className="cont-in d-center position-relative">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M48 31.7023C48 44.9572 36.7422 48 23.6697 48C10.5973 48 0 37.2548 0 24C0 10.7452 10.5973 0 23.6697 0C36.7422 0 48 18.4475 48 31.7023Z"
                              fill="#6754E9" />
                          </svg>
                          <div className="count-in position-absolute d-flex align-items-center gap-0 ">
                            <span className="count">21</span>
                            +
                          </div>
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name mb-0">
                            Flexible full-time & <br /> part-time care
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-lg-2">
                      <div className="list-of-admission">
                        <div className="row g-xl-3 g-3">
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <img src="assets/img/icon/check-badge.png" alt="img" />
                              Learning & Fun
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <img src="assets/img/icon/check-badge.png" alt="img" />
                              Cute Environment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-5 gap-lg-4 gap-3">
                  <Link to="/about" className="common_btn text-nowrap">
                    Learn More About Us
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                  <div className="user-thumb-area-grop d-flex align-items-center gap-xxl-2 gap-2">
                    <div className="cont-in d-center position-relative rounded-circle">
                      <img src="assets/img/about/about-rahand.png" alt="img" className="rounded-circle" />
                    </div>
                    <div className="author-info justify-content-start align-items-start text-start flex-column">
                      <div className="name mb-0">
                        Ronald Richards
                      </div>
                      <span>Co, Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/about/about-hert.png" alt="img" className="babol-quit bottom-0 d-xxl-block d-none zoom-in" />
        <img src="assets/img/about/about-rectangle-el.png" alt="img"
          className="position-absolute top-0 start-0 mt-2 updowns d-sm-block d-none" />
        <img src="assets/img/element/quick-rainbow.png" alt="img"
          className="position-absolute d-xxl-block d-none bottom-0 mb-5 me-5 end-0 updowns" />
      </div>

    </>
  )
}
