import Profile from "../../info.json";
import "./education.css";

const Education = () => {
  return (
    <div className="row mt-3">
      <h3 className="skills-header">Education</h3>
      <div class="history-tl-container">
        <ul class="tl">
          {Profile.eduction.map((edu, index) => {
            return (
              <li class="tl-item">
                <div class="timestamp">
                  {edu.startDate}
                  <br />
                  to
                  <br />
                  {edu.endDate}
                </div>
                <div class="item-title">{edu.course}</div>
                <div class="item-detail">{edu.collge}</div>
                {edu.university ? <div class="item-detail"></div> : null}
                <div class="item-detail">Percentage: {edu.percentage}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
