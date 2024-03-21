import { Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <div>회사정보</div>
            <Outlet/>
        </>
    );
}

export default About;