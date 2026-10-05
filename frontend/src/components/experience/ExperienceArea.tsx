const experienceItems = [
  {
    number: "01",
    title: "THINK",
    description:
      "Learning begins when students are encouraged to question, understand and think.",
    icon: "fa-solid fa-lightbulb",
    className: "think",
  },
  {
    number: "02",
    title: "EXPERIMENT",
    description:
      "Hands-on experiences can turn concepts into discoveries.",
icon: "fa-solid fa-flask",
    className: "experiment",
  },
  {
    number: "03",
    title: "CREATE",
    description:
      "Projects and creative opportunities allow ideas to become something students can call their own.",
    icon: "fa-solid fa-palette",
    className: "create",
  },
  {
    number: "04",
    title: "PLAY",
    description:
      "Sports can build teamwork, discipline, resilience and confidence.",
    icon: "fa-solid fa-medal",
    className: "play",
  },
  {
    number: "05",
    title: "EXPRESS",
    description:
      "Activities, performance and participation help students find and use their voice.",
    icon: "fa-solid fa-microphone-lines",
    className: "express",
  },
  {
    number: "06",
    title: "LEAD",
    description:
      "Opportunities to participate and collaborate can help students develop confidence and responsibility.",
    icon: "fa-solid fa-flag",
    className: "lead",
  },
];

export default function ExperienceArea() {
  return (
    <section className="libr-horizontal-experience">
      <div className="container">
                         <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
             THE LIBR EXPERIENCE
              </div>
              <h2 className="visible-slowly-bottom fw-bold d-block">
                Where Curiosity Turns Into Experience
              </h2>
            </div>
          </div>
 

        <div className="libr-horizontal-wrapper">
          {/* Keep full horizontal line */}
          <div className="libr-main-line"></div>

          {experienceItems.map((item, index) => (
            <div
              className={`libr-horizontal-step ${item.className}`}
              key={item.title}
            >
              <div className="libr-step-top">
                <span className="libr-step-number">
                  {item.number}
                </span>

                <div className="libr-step-icon">
                  <i className={item.icon}></i>
                </div>
              </div>

              <div className="libr-step-content">
                <span className="libr-step-title">
                  {item.title}
                </span>

                <p>{item.description}</p>

              </div>

              {index < experienceItems.length - 1 && (
                <div className="libr-step-arrow">
              
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}