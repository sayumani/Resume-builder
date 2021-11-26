import Profile from "../../info.json";
import "./skills.css"

const Skills = () => {
    return (
        <div className="row">
            <h3 className="skills-header">SKILLS</h3>
            <div className="skil-list">
                {
                    Profile.skills.map((skill, index) => <button key={index} className="btn skil-list-item mr-2">{skill}</button>)
                }
            </div>

        </div>
    )
}

export default Skills;