/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#e50914', // 229 9 20
                'primary-hv': '#ab0009',
                'secondary': '#0ea5e9',

                'background': '#1a1a1a', // 
                'section-bg': '#262525',

                'border': '#DEE7F5',
                'divider': '#6f6f6f',

                'heading': '#F4F4F4',
                'subheading': '#9f9f9f',
                'text': '#e2e8f0',
            },
        },

    },
    plugins: [],
}

