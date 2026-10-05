

export default function NewsletterAreaOne() {
  return (
    <>
      {/* <!-- Newsletter Section Start --> */}
      <section className="newsletter-section section-padding fix">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="section-title">
                <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                  Join Our Newsletter
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  Sign Up For Our Newsletter
                </h2>
              </div>
            </div>
            <div className="col-md-6 ps-lg-4">
              <form action="#" className="from-style1 wow fadeInDown">
                <input type="email" placeholder="Enter your email..." />
                <button type="button" className="common_btn text-nowrap">
                  SUBSCRIBE NOW
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </button>
              </form>
              <p className="mt-lg-3 mt-2 pra-clr">Keep up to date with the latest news and offers</p>
            </div>
          </div>
        </div>
        <img src="assets/img/footer/news-shape1.png" alt="img" className="news-estrue1 d-lg-block d-none" />
        <img src="assets/img/footer/news-shape2.png" alt="img" className="news-estrue d-lg-block d-none" />
      </section>
    </>
  )
}
