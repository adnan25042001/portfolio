import React from "react";
import Footer from "./Footer";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section
            className={`contact-bg bg-no-repeat bg-cover bg-center bg-mainColor bg-opacity-40`}
            id="contact"
        >
            <div className="container bg-white mx-auto text-black rounded-md shadow-bs p-6 xs:p-10">
                <div className="heading text-mainColor mb-8">
                    <h3>Contact</h3>
                </div>
                <div className="flex justify-between items-center gap-12 flex-col-reverse sm:flex-row">
                    <div className="contact-after w-full sm:w-[30%] h-full shrink-0 pr-2 relative flex flex-wrap gap-10 justify-center items-center">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <BsTelephoneFill className="text-bgColor text-2xl" />
                            <div className="text-lg font-semibold">Phone</div>
                            <p className="text-base text-gray-700 font-medium">
                                +91 8586857610
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <MdLocationOn className="text-bgColor text-4xl" />
                            <div className="text-lg font-semibold">Address</div>
                            <p className="text-base text-gray-700 font-medium">
                                New Delhi, India
                            </p>
                        </div>
                        <div className="social gap-6">
                            <a
                                href="https://www.linkedin.com/in/adnanhussain0425/"
                                target="_blank"
                                className="social-link bg-bgColor text-white"
                            >
                                <SiLinkedin />
                            </a>
                            <a
                                href="https://github.com/adnan25042001"
                                target="_blank"
                                className="social-link bg-bgColor text-white"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="mailto:adnan.hussain.136660@gmail.com"
                                target="_blank"
                                className="social-link bg-bgColor text-white"
                            >
                                <SiGmail />
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-[70%]">
                        <h2 className="text-xl xs:text-2xl sm:text-3xl text-mainColor font-bold mb-3">
                            Send me a message
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 font-medium">
                            If you have any work from me or any type of queries
                            related to me. You can send me message from here.
                        </p>
                        <form className="flex flex-col mt-4 gap-3 items-start">
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg"
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg"
                            />
                            <textarea
                                id="message"
                                type="text"
                                placeholder="Enter your message"
                                rows="4"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg resize-none"
                            ></textarea>
                            <input
                                id="tbtn"
                                type="submit"
                                value="Send Now"
                                className="text-white text-lg transition-all duration-300 font-semibold border-[2px] border-mainColor cursor-pointer rounded-lg bg-mainColor py-[6px] px-4 lg:py-2 lg:px-5 hover:bg-transparent hover:text-mainColor"
                            />
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
