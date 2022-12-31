/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                site: {
                    darkBlue: "#1b232b",
                    lightGreen: "#19cb8b",
                    greyishWhite: "#ebebeb",
                    lightDarkBlue: "#262e35",
                },
            },
            fontFamily: {
                open: ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
