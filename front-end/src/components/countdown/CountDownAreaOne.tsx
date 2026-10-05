

export default function CountDownAreaOne() {
  return (
    <>
      {/* <!-- Counter Section Start --> */}
      <div className="counter-section-one fxi position-relative">
        <div className="counter-wrapper-one z-1">
          <div className="container">
            <div className="row g-4">
              <div className="col-auto col-sm-6 col-lg-3">
                <div className="counter__items text-center wow fadeInUp" data-wow-delay=".3s">
                  <div className="mb-4 mx-auto icon">
                    <img width="64" src="assets/img/icon/c-icon1.png" alt="img" className="w-auto" />
                  </div>
                  <div className="content-count">
                    <div className="count-item">
                      <span className="count">27</span>
                      <span>+</span>
                    </div>
                    <p>
                      Year Of Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-auto col-sm-6 col-lg-3">
                <div className="counter__items text-center wow fadeInUp" data-wow-delay=".5s">
                  <div className="mb-4 mx-auto icon">
                    <img width="64" src="assets/img/icon/c-icon2.png" alt="img" className="w-auto" />
                  </div>
                  <div className="content-count">
                    <div className="count-item">
                      <span className="count">6500</span>
                      <span>+</span>
                    </div>
                    <p>
                      Class Completed
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-auto col-sm-6 col-lg-3">
                <div className="counter__items text-center wow fadeInUp" data-wow-delay=".7s">
                  <div className="mb-4 mx-auto icon">
                    <img width="64" src="assets/img/icon/c-icon3.png" alt="img" className="w-auto" />
                  </div>
                  <div className="content-count">
                    <div className="count-item">
                      <span className="count">100</span>
                      <span>+</span>
                    </div>
                    <p>
                      Experts Instructors
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-auto col-sm-6 col-lg-3">
                <div className="counter__items text-center wow fadeInUp" data-wow-delay=".9s">
                  <div className="mb-4 mx-auto icon">
                    <img width="64" src="assets/img/icon/c-icon4.png" alt="img" className="w-auto" />
                  </div>
                  <div className="content-count">
                    <div className="count-item">
                      <span className="count">6549</span>
                      <span>+</span>
                    </div>
                    <p>
                      Students Enroll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/count-bg.png" alt="img" className="count-bg" />
        <img src="assets/img/element/rock-ele.png" alt="img" className="rock-ele d-sm-block d-none updowns" />
      </div>

    </>
  )
}
