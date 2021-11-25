import React from "react";
import Profile from "../info.json";
import profileImg from "../assets/profie.jpg"
import "./header.css";

const Header = () =>{
    return (
        <section className="profile-header row p-4">
            <div className="col-md-9">
                <h1 className="mt-1">
                    {Profile.name}
                </h1>
                <h3 className="designation">
                    {Profile.designation}
                </h3>
                <p className="text-justify">
                    {Profile.profile_summary}
                </p>
            </div>
            <div className="col-md-3 mt-3 d-flex justify-content-end">
                <img src={profileImg}  className="profile-img" alt="profile imagge"/>
            </div>
        </section>
    )
}
export default Header;