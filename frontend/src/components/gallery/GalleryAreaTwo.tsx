
export default function GalleryAreaTwo() {
  return (
    <>
      {/* <!-- actives Section Start --> */}
      <section className="activites-section pb-xxl-5 pb-4 fix">
        <div className="container position-relative z-1">
          <div className="active-election-box text-center">
            <div className="section-title-area justify-content-center">
              <div className="section-title text-center">
                <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Our Preschool Gallery
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  Kids Activities Gallery
                </h2>
              </div>
            </div>
          </div>
          <div className="active-thumb">
            <img src="assets/img/element/actives-shape.png" alt="img" className="w-100" />
          </div>
        </div>
        <img src="assets/img/element/ab-pens.png" alt="img" className="ab-pens updowns d-xxl-block d-none" />
      </section>
    </>
  )
}
