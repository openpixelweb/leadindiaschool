
export default function ProgressAreaAbout() {
  return (
    <>
      {/* <!-- trust progress Section Start --> */}
      <div className="trust-progress-section space-bottom fix">
        <div className="container">
                   <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
               YOUR JOURNEY TO LIBR
              </div>
              <h2 className="visible-slowly-bottom fw-bold d-block">
                This Is Where Their Next Story Begins
              </h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-inner style1">
              <div className="event">
                <div className="content text-end">
                  <h3>Enquire</h3>
                  <p>Tell us a little about your child and what you're looking for.</p>
                </div>
                <div className="year-box">
                  <span className="year vertical-text">01</span>
                  <img src="assets/img/element/start-top.png" alt="img" />
                </div>
              </div>
              <div className="event">
                <div className="content text-end">
                  <h3>Campus Visit</h3>
                  <p>Walk through our campus and experience the environment for yourself.</p>
                </div>
                <div className="year-box">
                  <span className="year vertical-text">02</span>
                  <img src="assets/img/element/start-top.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="thumb-line d-md-block d-none">
              <img src="assets/img/element/drived-line-home.png" alt="img" />
            </div>
            <div className="timeline-inner style2 ms-auto pe-lg-2">
              <div className="event">
                <div className="content text-end">
                  <h3>Interaction</h3>
                  <p>Meet our team and get answers to the questions that matter to your family.</p>
                </div>
                <div className="year-box">
                  <img src="assets/img/element/start-bottom.png" alt="img" />
                  <span className="year vertical-text">03</span>
                </div>
              </div>
              <div className="event">
                <div className="content text-end">
                  <h3>Admission</h3>
                  <p>Complete the admission process when you're ready.</p>
                </div>
                <div className="year-box">
                  <img src="assets/img/element/start-bottom.png" alt="img" />
                  <span className="year vertical-text">04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/"><img src="assets/img/element/hero-pulp.png" alt="img"
          className="hero-pulp d-sm-block d-none position-absolute bottom-0 end-0 mb-xl-5 mb-4 me-lg-5 zoom-in" /></a>
      </div>
    </>
  )
}
