import Education from "./Education/education";
import "./main.css";
import Skills from "./Skills/skills";

const Main = () => {
    return (
        <section className="row p-4">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
                <Skills />

                <Education/>
            </div>
        </section>
    )
}

export default Main