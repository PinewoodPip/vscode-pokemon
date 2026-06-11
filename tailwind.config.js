/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/panel/**/*.tsx'],
    theme: { extend: {} },
    plugins: [],
    corePlugins: {
        // reset.css already handles box-sizing and base resets
        preflight: false,
    },
};
