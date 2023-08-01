import React from "react";
import myImage from "../assets/imgages/MyImg.png";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Home = () => {
    return (
        <div className="bg-bgColor flex justify-between items-center" id="home">
            <div className="home-text">
                <h3>Hello, I'm</h3>
                <h1>Adnan Hussain</h1>
                <h5>
                    Full Stack Developer <span>from India</span>
                </h5>
                <p>
                    I'm always interested about cool stuff. <br />
                    Are you minding a project? <br />
                    Let's talk.
                </p>
                <div className="social">
                    <a
                        href="https://www.linkedin.com/in/adnanhussain0425/"
                        target="_blank"
                        className="social-link"
                    >
                        <SiLinkedin />
                    </a>
                    <a
                        href="https://github.com/adnan25042001"
                        target="_blank"
                        className="social-link"
                    >
                        <SiGithub />
                    </a>
                    <a
                        href="mailto:adnan.hussain.136660@gmail.com"
                        target="_blank"
                        className="social-link"
                    >
                        <SiGmail />
                    </a>
                </div>
                <div className="d-btn">
                    <a
                        href="./download/Adnan_Hussain_Resume.pdf"
                        className="btn"
                        id="abt_btn"
                        download
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center p-20">
                <div className="image-transition bg-gradient-to-l from-purple-600 to-rose-600">
                    <img
                        src={myImage}
                        alt="myImage"
                        className="w-[320px] transition-all transform hover:scale-100"
                    />
                    <div className="top-0 left-[14%] absolute h-full w-5 bg-bgColor"></div>
                    <div className="left-0 bottom-[14%] absolute w-full h-5 bg-bgColor"></div>
                </div>
            </div>
            {/* <img src={Grass} alt="grass" /> */}
        </div>
    );
};

export default Home;
