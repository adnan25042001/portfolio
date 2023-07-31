import React, { useEffect } from "react";
import Home from "./components/Home";
import Cta from "./components/Cta";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
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
            <Skills />
            <Cta />
            <Footer />
            <div className="cursor"></div>
        </>
    );
};

export default App;
