import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { menuItem } from "../assets/menuContent";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <header className={``}>
            <a href="#" className="">
                Adnan Hussain
            </a>
            <nav className="navlist">
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
                            >
                                {ele} <span></span>
                            </Link>
                        );
                    })}
            </nav>

            <MdMenu />
            <MdClose />
        </header>
    );
};

export default Navbar;
