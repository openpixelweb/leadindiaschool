import { Link } from "react-router-dom";

interface BreadcrumbProps { 
  title: string
  subtitle: string
}

export default function Breadcrumb({ title, subtitle }: BreadcrumbProps) {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-breadcrumb-section fix position-relative">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="text-center">
              {title}
            </h1>
            <ul className="bread-link">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                {subtitle}
              </li>
            </ul>
          </div>
        </div>
        <img src="assets/img/breadcrumb/bread-ele5.png" alt="img" className="bread-ele5 d-lg-block d-none zoom-in" />
        <img src="assets/img/breadcrumb/bread-ele4.png" alt="img" className="bread-ele4 d-xl-block d-none zoom-in" />
        <img src="assets/img/breadcrumb/bread-ele3.png" alt="img" className="bread-ele3 d-md-block d-none zoom-in" />
        <img src="assets/img/breadcrumb/bread-ele2.png" alt="img" className="bread-ele2 d-xxl-block d-none updowns" />
        <img src="assets/img/breadcrumb/bread-ele1.png" alt="img" className="bread-ele1 updowns" />
        <img src="assets/img/element/break-shape.png" alt="img" className="bread-shape" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
