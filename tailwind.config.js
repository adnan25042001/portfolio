/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#020912",
                mainColor: "#8d2de2",
                PrimaryColor: "white",
                secondryColor: "#e4e4e4",
            },
            backgroundImage: {
                icon: "linear-gradient(-45deg, #9633e6, #df1d48)",
                gradient: "linear-gradient(to right, #9633e6, #df1d48)",
            },
        },
        fontFamily: {
            textStyle: "'Comforter Brush', cursive",
        },
        screens: {
            xs: "575px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
        },
    },
    plugins: [],
};
