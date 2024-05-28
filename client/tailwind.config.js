/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"open-sans": ["Open Sans", "sans-serif"],
			crimson: ["Crimson Text", "serif"],
			"crimson-pro": ["Crimson Pro", "serif"],
			mono: ["Inconsolata", "monospace"],
		},
		colors: {
			"smoke-yellow": "#e0d7c8",
			"smoke-brown": "#463e38",
			"soft-gray": '#e7e7e7',
			"mid-gray": "#A6A6A6",
			"solid-gray": "gray",
			hoverOverBrown: "#db6435",
			bayavaOrange: "#cc582a",
			peach: "#F6DBC7",
			transparent: "transparent",
			current: "currentColor",
			black: "#000000",
			slate: "#64748b",
			yellow: "#EDAA38",
			"light-green": "#A4DF56",
			"light-yellow": "#F3CB87",
			"light-blue": "#4169E1",
			gray: "#6b7280",
			white: "#ffffff",
			purple: "#3f3cbb",
			midnight: "#121063",
			metal: "#565584",
			tahiti: "#3ab7bf",
			silver: "#ecebff",
			"bubble-gum": "#ff77e9",
			bermuda: "#78dcca",
		},
		extend: {},
	},
	plugins: [
		typography,
	],
};
