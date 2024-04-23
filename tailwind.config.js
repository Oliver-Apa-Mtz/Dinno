/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#02015A",
				secundario: "#573CFF",
				white: "#FFFFFF",
				text: "#4E5774",
				gray: "#F8F6F4",
			},
		},
	},
	plugins: [],
};
