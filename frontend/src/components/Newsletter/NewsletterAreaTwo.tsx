

export default function NewsletterAreaTwo() {
  return (
    <>
      {/* <!-- Newsletter Section Start --> */}
      <section className="newsletter-section newsletter-style2 fix">
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <div className="newsletter-style__wrap position-relative z-1">
                <div className="section-title  pb-3 text-center section-title-white">
                
                   <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                   ADMISSIONS
              </div>
                  <h2 className="black visible-slowly-bottom fw-bold d-block">
                    Your Child's Next Chapter Could Start Here.
                  </h2>
                </div>
            
                <p className="text-center">Choosing the right school begins with understanding the environment in which your child will learn and grow.</p>
                <p className="text-center">Discover LIBR, meet our team and experience our campus.</p>
            
                <img src="assets/img/footer/newsletter-pen.png" alt="img" className="newsletter-pen" />
            <center> <a className="common_btn text-nowrap mt-3 text-center" href="/" data-discover="true">Enquire Now<span className="icon_wrapper"><i className="fas fa-long-arrow-alt-right"></i></span></a></center>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/footer/newletter-girls.png" alt="img" className="news-estrue01 d-xxl-block d-none" />
        {/* <img src="assets/img/footer/newsletter-dot.png" alt="img" className="news-estrue02 d-xxl-block d-none" />
        <img src="assets/img/footer/newsletter-covid.png" alt="img" className="news-covid cir36 d-lg-block d-none" /> */}
      </section>
    </>
  )
}
