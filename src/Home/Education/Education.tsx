import "./Education.css"
const Education =() =>
{
    return (
        <div className="Education-section">
          <h4 >Education</h4>
          <div className="Education-card">
            <div className="Education-header">
              <h3>Bachelor of Engineering</h3>
              <div className="Education-tags">
                <span className="company-tag"><a href="http://www.sit.ac.in/html/department.php?deptid=21">Artificial Intelligence and Data Science</a></span>
                <span className="duration-tag">2025</span>
              </div>
            </div>
            <p className="Education-description">
            Siddaganga Institue Of Technology 
            <br/>
            CGPA 8.75
            </p>
          </div>
        </div>
        )
}
 export default Education;