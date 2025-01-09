/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	conatiner : {
		center : "true",
		padding : "15px",
	},
	screens : {
		sm : "640px",
		md : "768px",
		lg : "960",
		xl : "1200",
	},
	fontFamily : {
		primary : "var(--font-jetbarinsMono)",
	},
  	extend: {
		keyframes : {
			"accordtion-down":{
				from : {height : "0"},
				to : {height : "var(--radix-accordtion-content-height"},
			},
			"accordtion-up":{
				from : {height : "var(--radix-accordtion-content-height"},
				to : {height : "0"},
			},
		},
		animation : {
			"accordtion-down" :"accordtion-down 0.2 ease-out",
			"accordtion-up" :"accordtion-up 0.2 ease-out",
		},
  		colors: {
			primary : "#1c1c22",
			accent : {
				DEFAULT : "#00ff99",
				hover : "#00e187"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
