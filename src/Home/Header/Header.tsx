import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons";
import photo from "../photo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-container">
      <div className="header-left">
        <img src={photo} className="images" alt="Divya Rani K" />
      </div>

      <div className="header-right">
        <h2 className="main-title">Divya Rani K (Full Stack Developer)</h2>

        <div className="role">
          <button
            className="role-button"
            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}

          >
            Developer
          </button>
          <button className="role-button">Creator</button>
        </div>

        <div className="other-platforms">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/divyarani-k-686b9a286/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
           </li>
            <li>
              <a href="https://github.com/divyaranidhkls">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
           </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
