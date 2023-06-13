import React from "react";
import './css/Home.css';
import Sidebar from "./Sidebar";
import Dropdown from "./dropdown";
const Home = () => {
    return (
        <div className="main">
            <Sidebar />
            <Dropdown />
            <div className="Home">
                <h1>Exam Registration</h1>
                <h2>Home Page</h2>
                <p className="reg">
                    Exam Registration Website  (eRegistration) has been established as a exam form filling website. Students interested in appearing for
                    this exam must fill the form to be eligible for the exam.
                    <p className="Note">
                        Note * - You can register and fill the form only once. Fill all the necessary information carefully. Any wrong or innacurate
                        information will lead to disqualification of the candidate and he/she won't be allowed to appear for the exam.
                    </p>
                </p>
            </div>
        </div>
    )
}
export default Home