
const Courses = () => {
  const courses = [
    "Responsive Web Design",
    "JavaScript Algorithms and Data Structures",
    "Front End Development Libraries",
    "Data Visualization",
    "Back End Development and APIs",
    "Quality Assurance",
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Earn Free Certifications</h2>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{course}</h5>
                  <p className="card-text text-muted">
                    Learn the skills and complete projects to earn your certification.
                  </p>
                  <button className="btn btn-success">Start Course</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
