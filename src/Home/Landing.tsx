import "./Landing.css"
import photo from "./photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const landingPage = () =>
{
    return (
        <div className="landing">
  <section className="header-container">
    <div className="header-left">
      <img src={photo} className="images" />
    </div>
    <div className="header-right">
      <h2 className="main-title">Divya Rani K (Full Stack Developer)</h2>
      <div className="role">
        <button className="role-button">Developer</button>
        <button className="role-button">Creator</button>
      </div>
      <div className="other-platforms">
        <ul>
          <li><a href="https://www.linkedin.com/in/divyarani-k-686b9a286/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> X / Twitter</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section className="about-section">
    <div className="about-left"><h3>About</h3></div>
    <div className="about-right">
      <p>I'm Divya Rani K. I'm a full-stack developer and tech-content creator.</p>
      <p>While professionally specialised in minimalist, aesthetic and functional experiences, 
        I extend these principles to my personal life and beyond..</p>
      <p>With a background in Computer Science, I am doing Internship in PurpleShorts and am currently exploring AI and web innovation.</p>
    </div>
  </section>
  
  <section className="experience-section">
  <div className="experience-title">Work Experience</div>

  <div className="experience-entry">
    <div className="company">
      <h4 >Intern</h4>
      
      <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">
  <button>
    GeekForGeeks
  </button>
</a>


     <h4>20244 September</h4>
    </div>
    <p>Completed Internship on Advanced DSA</p>
  </div>

  
  
</section>


</div>

    )

    
}
export default landingPage;