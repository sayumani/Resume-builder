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
          {/* <li class="tl-item">
            <div class="timestamp">
              3rd March 2015
              <br /> 7:00 PM
            </div>
            <div class="item-title">Start from Shire</div>
            <div class="item-detail">Don't forget the ring</div>
          </li>
          <li class="tl-item">
            <div class="timestamp">
              19th March 2015
              <br /> 3:00 PM
            </div>
            <div class="item-title">Kill some Orcs</div>
            <div class="item-detail">Don't enter the caves!!</div>
          </li>
          <li class="tl-item">
            <div class="timestamp">
              1st June 2015
              <br /> 7:00 PM
            </div>
            <div class="item-title">Throw that goddamn ring in the lava</div>
            <div class="item-detail">Also, throw that Gollum too</div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Education;
