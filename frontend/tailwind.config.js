/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screen: {
				fold: "344px",
				iph_se: "375px",
				iph_xr: "414px",
				iph_12: "390px",
				iph_14: "430px",
				pixel: "412px",
				sam_gal: "360px",
				sam_s20: "412px",
				ipad: "768px",
				ipad_a: "820px",
				ipad_pro: "1024px",
				surf: "912px",
				surf_duo: "540px",
				asus_z: "853px",
				sam_gal_a: "412px",
				nest: "1024px",
				nest_s: "600px",
				nest_max: "1280px",
				desk: "1366px",
				desk_i: "1440px",
				desk_ii: "1536px",
				desk_iii: "1920px",
			}
		},
	},
	plugins: [],
};
