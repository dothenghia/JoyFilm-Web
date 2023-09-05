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
                'li-header': '#ededed',
				'li-bg-1': '#e9ebee',
				'li-bg-2': '#f7f7f7',
				'li-bg-3': '#ffffff',
				'li-border': '#c9c9c9',

				'li-heading': '#121212',
				'li-subheading': '#545454',
				'li-text': '#111',
				'li-primary': '#0ea5e9',

            },
        },

    },
    plugins: [
        require('flowbite/plugin')
    ],
}

