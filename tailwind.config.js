/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            backgroundImage: {
                "wavy-pattern-desktop": "url('../images/bg-desktop.png')",
                "wavy-pattern-mobile": "url('../images/bg-mobile.png')",
            },
            colors: {
                'Grad': 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',
                "Pale-Blue": "hsl(243, 100%, 93%)",
                "Grayish-Blue": "hsl(229, 7%, 55%)",
                "Dark-Blue": "hsl(228, 56%, 26%)",
                "Very-Dark-Blue": " hsl(229, 57%, 11%)",
            },
        },
    },
    plugins: [],
};
