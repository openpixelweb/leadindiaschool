import { Link } from "react-router-dom";


export default function EventAreaThree() {
  return (
    <>

      {/* <!-- News Section Start --> */}
      <section className="blog-style2 blog-section-style3 section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Our Events
                </div>
                <h2 className="text-dark black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
                  Upcoming
                  <span className="position-relative text-theme title-ele3">
                    Events
                    <img src="assets/img/element/title-ele3.png" alt="img" />
                  </span>
                </h2>
              </div>
            </div>
            <div className="">
              <Link to="/event" className="common_btn text-nowrap">
                View All Events
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-xxl-0 g-4">
              <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items item-y5 style__unique-grid">
                  <img src="assets/img/element/event-item-shape.png" alt="img"
                    className="cources-bg d-xl-block d-none" />
                  <Link to="/event-details" className="c-image mb-0 position-relative overflow-hidden">
                    <img src="assets/img/blog/thumb301.png" alt="img" className="rounded-4 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> Dec 15, 2026
                      </span>
                    </div>
                    <h3 className="mb-1 lh-1">
                      <Link to="/event-details" className="black d-block lh-sm visible-slowly-bottom">
                        Creative Art & Craft Day
                      </Link>
                    </h3>
                    <p className="pra-clr border-b-dashed pb-xxl-3 pb-2 mb-3 mb-xxl-4">
                      Kids enjoy painting, coloring, and handmade crafts to develop creativity
                    </p>
                    <Link to="/event-details" className="common_btn common_btn_outline  text-nowrap">
                      Attend Event
                      <span className="icon_wrapper w-36 h-36 min-w-36 fs-6">
                        <i className="fas fa-long-arrow-alt-right fs-6"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pt-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items item-y5 style__unique-grid">
                  <img src="assets/img/element/event-item-shape.png" alt="img"
                    className="cources-bg d-xl-block d-none" />
                  <Link to="/event-details" className="c-image mb-0 position-relative overflow-hidden">
                    <img src="assets/img/blog/thumb302.png" alt="img" className="rounded-4 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> Dec 15, 2026
                      </span>
                    </div>
                    <h3 className="mb-1 lh-1">
                      <Link to="/event-details" className="black d-block lh-sm visible-slowly-bottom">
                        Baby Play & Sensory Session
                      </Link>
                    </h3>
                    <p className="pra-clr border-b-dashed pb-xxl-3 pb-2 mb-3 mb-xxl-4">
                      A day of games, crafts, and activities for kids and parents to enjoy together.
                    </p>
                    <Link to="/event-details" className="common_btn common_btn_outline  text-nowrap">
                      Attend Event
                      <span className="icon_wrapper w-36 h-36 min-w-36 fs-6">
                        <i className="fas fa-long-arrow-alt-right fs-6"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pt-lg-3 wow fadeInUp" data-wow-delay=".6s">
                <div className="cources-single-items item-y5 style__unique-grid">
                  <img src="assets/img/element/event-item-shape.png" alt="img"
                    className="cources-bg d-xl-block d-none" />
                  <Link to="/event-details" className="c-image mb-0 position-relative overflow-hidden">
                    <img src="assets/img/blog/thumb303.png" alt="img" className="rounded-4 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> Dec 15, 2026
                      </span>
                    </div>
                    <h3 className="mb-1 lh-1">
                      <Link to="/event-details" className="black d-block lh-sm visible-slowly-bottom">
                        Storybook Dress-Up Day
                      </Link>
                    </h3>
                    <p className="pra-clr border-b-dashed pb-xxl-3 pb-2 mb-3 mb-xxl-4">
                      Children dress as their favorite storybook characters for a fun, imaginative day.
                    </p>
                    <Link to="/event-details" className="common_btn common_btn_outline  text-nowrap">
                      Attend Event
                      <span className="icon_wrapper w-36 h-36 min-w-36 fs-6">
                        <i className="fas fa-long-arrow-alt-right fs-6"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pt-lg-3 wow fadeInUp" data-wow-delay=".7s">
                <div className="cources-single-items item-y5 style__unique-grid">
                  <img src="assets/img/element/event-item-shape.png" alt="img"
                    className="cources-bg d-xl-block d-none" />
                  <Link to="/event-details" className="c-image mb-0 position-relative overflow-hidden">
                    <img src="assets/img/blog/thumb304.png" alt="img" className="rounded-4 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> Dec 15, 2026
                      </span>
                    </div>
                    <h3 className="mb-1 lh-1">
                      <Link to="/event-details" className="black d-block lh-sm visible-slowly-bottom">
                        Summer Fun Kids Party
                      </Link>
                    </h3>
                    <p className="pra-clr border-b-dashed pb-xxl-3 pb-2 mb-3 mb-xxl-4">
                      A joyful celebration with games, music, and fun group activities.
                    </p>
                    <Link to="/event-details" className="common_btn common_btn_outline  text-nowrap">
                      Attend Event
                      <span className="icon_wrapper w-36 h-36 min-w-36 fs-6">
                        <i className="fas fa-long-arrow-alt-right fs-6"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/event-pen-epe.png" alt="img"
          className="book-bird top-0 pt-xxl-5 d-sm-block d-none mt-5 updowns" />
        <img src="assets/img/element/event-animal-ele.png" alt="img"
          className="ele-cake d-xxl-block start-0 d-none updowns" />
      </section>

    </>
  )
}
