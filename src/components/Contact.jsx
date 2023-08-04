import React from "react";
import Footer from "./Footer";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="wave-2" id="contact">
            <div className="heading">
                <h3>Contact</h3>
            </div>
            <div className="container m-auto">
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
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
