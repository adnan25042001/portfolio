/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#020912",
                mainColor: "#8d2de2",
                PrimaryColor: "white",
                secondryColor: "#d1d1d1",
            },
            backgroundImage: {
                gradient: "linear-gradient(to right, #9633e6, #df1d48)",
            },
            fontFamily: {
                textStyle: "'Homemade Apple', cursive",
            },
        },
    },
    plugins: [],
};
