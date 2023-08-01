import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { menuItem } from "../assets/menuContent";
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header
            className={`flex items-center justify-between py-3 px-20 bg-mainColor sticky top-0 left-0 z-[900]`}
        >
            <a
                href="#"
                className="text-xl xs:text-2xl font-bold static z-[100]"
            >
                Adnan Hussain
            </a>
            <nav
                className={`${
                    toggle ? "top-[52px] xs:top-[56px]" : "top-[-1000px]"
                } flex flex-col md:flex-row items-center justify-center  text-base xs:text-lg  max-h-[80vh] gap-6 lg:gap-10 py-6 px-3 md:py-0 md:px-0 left-0 bg-mainColor w-full md:w-auto absolute md:static overflow-auto transition-all duration-700`}
            >
                <div className="flex flex-col md:flex-row gap-4 text-center">
                    {menuItem &&
                        menuItem.map((ele) => {
                            return (
                                <Link
                                    to={ele.toLocaleLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    key={ele}
                                    className="relative overflow-hidden py-1 px-4 lg:px-5 link-hover"
                                >
                                    {ele}{" "}
                                    <span className="absolute h-full w-full bg-white left-[100%] top-[92%] transition-all duration-500"></span>
                                </Link>
                            );
                        })}
                </div>
                <button className="text-mainColor transition-all duration-300 font-semibold border-[2px] border-white rounded-lg bg-white py-[4px] px-[10px] lg:py-[6px] lg:px-3 hover:bg-transparent hover:text-white">
                    Download CV
                </button>
            </nav>

            {!toggle && (
                <MdMenu
                    className=" cursor-pointer Static md:hidden text-white font-bold text-3xl z-[100]"
                    onClick={() => setToggle(true)}
                />
            )}
            {toggle && (
                <MdClose
                    className="cursor-pointer static md:hidden text-white font-bold text-3xl z-[100]"
                    onClick={() => setToggle(false)}
                />
            )}
        </header>
    );
};

export default Navbar;
