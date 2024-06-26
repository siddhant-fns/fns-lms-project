/** @type {import('tailwindcss').Config} */
module.exports = {
    parser: 'postcss-scss',
    content: [
       "./auth-ui/*.{html,js}",
       "./sanket/*.{html,js}",
<<<<<<< HEAD
       "./sanket/alpinemenu/*.{html,js}",
       "./manish/*.{html,js}",

=======
>>>>>>> main
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}