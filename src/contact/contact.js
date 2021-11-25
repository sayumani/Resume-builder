import Profile from "../info.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-infos row">
      <div className="col-md-12">
        <ul className="contact-list list-container">
          <li className="contact-list-item mw-235">
            <FontAwesomeIcon icon={faEnvelope} />
            {Profile.contact_info.email}
          </li>
          <li className="contact-list-item mw-140">
            <FontAwesomeIcon icon={faMobileAlt} />
            {Profile.contact_info.phone}
          </li>
          <li className="contact-list-item mw-180">
            <FontAwesomeIcon icon={faGithub} />
            {Profile.social_links.github}
          </li>
          <li className="contact-list-item mw-285">
            <FontAwesomeIcon icon={faLinkedin} />
            {Profile.social_links.linkedin}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
