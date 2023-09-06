/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#e50914',

                'background': '#05151e',
                'card-bg': '#f7f7f7',
                'border': '#DEE7F5',

                'heading': '#F4F4F4',
                'subheading': '#D6D6D6',
                'text': '#FAFAFA',
            },
        },

    },
    plugins: [
        require('flowbite/plugin')
    ],
}

