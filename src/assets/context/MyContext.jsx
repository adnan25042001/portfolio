import React, { createContext, useState } from "react";

export const Context = createContext();

const MyContext = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    return (
        <Context.Provider value={{ scrolled, setScrolled }}>
            {children}
        </Context.Provider>
    );
};

export default MyContext;
