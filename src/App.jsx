import React, { useContext, useEffect } from "react";
import Home from "./components/Home";
import Cta from "./components/Cta";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MyContext, { Context } from "./assets/context/MyContext";

const App = () => {
    const { setScrolled } = useContext(Context);

    useEffect(() => {
        let home = document.getElementById("home").clientHeight;
        let homeText = document.querySelector("home-text");
        let homeImg = document.querySelector("home-img");
        const scrollFunc = () => {
            let scroll = window.scrollY;

            homeImg.style.top = homeText.style.top = scroll * 2.5 + "px"

            if (scroll > home + 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        return window.addEventListener("scroll", scrollFunc);
    }, [window.scrollY]);

    useEffect(() => {
        let cursor = document.querySelector(".cursor");
        let timeout;

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            cursor.style.display = "block";

            clearTimeout(timeout);

            timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });

        const mouseStopped = () => {
            cursor.style.display = "none";
        };
    }, []);
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Cta />
            <Footer />
            <div className="cursor"></div>
        </>
    );
};

export default App;
