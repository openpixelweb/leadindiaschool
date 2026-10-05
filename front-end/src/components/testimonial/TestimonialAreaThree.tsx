 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




export default function TestimonialAreaThree() {
  return (
    <>
      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section testimonial-section3 position-relative fix">
        <div className="container">
                   <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
               REAL FAMILIES. REAL EXPERIENCES.
              </div>
              <h2 className="visible-slowly-bottom fw-bold d-block">
                Ask the People Who Know LIBR Differently—Our Parents.
              </h2>
            </div>
          </div>
          <Swiper 
          loop={true}
          speed={1500}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1199: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="swiper testimonial-slider">
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <img src="assets/img/element/testimonial-items-bg.png" alt="img" />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content">
                      <p className="mb-3">
                        “The teachers are approachable, encouraging and genuinely invested in Advika’s progress. That personal connection gives us great confidence as parents.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Kiran Reddy</div>
                        <span className="designation">/Parent of Advika Reddy</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <img src="assets/img/thumbnail/parent.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <img src="assets/img/element/testimonial-items-bg.png" alt="img" />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content">
                      <p className="mb-3">
                        “LIBR provides more than classroom learning. Reyansh is developing teamwork, independence and confidence through the many experiences the school offers”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Meghana Patel</div>
                        <span className="designation">/Parent of Reyansh Patel</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <img src="assets/img/thumbnail/parent.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative  p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <img src="assets/img/element/testimonial-items-bg.png" alt="img" />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content">
                      <p className="mb-3">
                        “The balance between academics and activities has been wonderful for Ananya. She is learning well while also exploring her creativity and interests.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Priya Sharma</div>
                        <span className="designation">/Parent of Ananya Sharma</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <img src="assets/img/thumbnail/parent.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative  p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <img src="assets/img/element/testimonial-items-bg.png" alt="img" />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “We have seen a wonderful change in Vihaan’s confidence and communication. LIBR gives him opportunities to learn, participate and discover his strengths.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Sneha Rao</div>
                        <span className="designation">/Parent of Vihaan Rao</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <img src="assets/img/thumbnail/parent.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative  p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <img src="assets/img/element/testimonial-items-bg.png" alt="img" />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “What we appreciate most is the supportive environment and the individual attention Ishita receives. She genuinely looks forward to going to school every day.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Rajesh Kumar</div>
                        <span className="designation">/Parent of Ishita Kumar</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <img src="assets/img/thumbnail/parent.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
         
          </Swiper>
        </div>
        <img src="assets/img/element/testimonila-rocket-ele.png" alt="img"
          className="position-absolute end-0 bottom-0 me-4 d-sm-block d-none updowns d-sm-block" />
        <img src="assets/img/element/quick-rainbow.png" alt="img" className="updowns d-xl-block d-none ranbow-testimonial" />
      </section>
    </>
  )
}
