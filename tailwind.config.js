/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: "320px",
      small: "375px",
      phone: "425px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "mobile-mode": { min: "0px", max: "639px" },
      "desktop-mode": { min: "640px", max: "2160px" },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 5s linear infinite',
      },
      dropShadow: {
        'solid': '8px 8px rgba(0, 0, 0, 1)',
        'solid-bottom': '0 8px rgba(0, 0, 0, 1)',
      },
      colorTheme: {
        "primary": "#0E0E0E",
        "secondary": "#efefef",
        "accent": "#FFD400",
      },
      border: {
        "border-primary": "border-2 border-[#0E0E0E]"
      },
    }
  },
  daisyui: {
    themes: []
  },
  plugins: [require("daisyui")],
  
};
