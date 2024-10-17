import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "selector",
	theme: {
		fontFamily: {
			sans: ["Inter", "serif"],
		},
		extend: {
			aria: {
				invalid: 'invalid="true"',
			},
		},
	},
};

export default config;
