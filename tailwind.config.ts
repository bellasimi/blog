import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropFilter: {
        blur: "blur(5px)",
      },
      borderColor: {
        "blue-opacity-21": "rgba(0, 127, 253, 0.21)",
      },
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
        dashboard: "rgba(0, 0, 0, 0.13) 0px 1px 3px",
      },
      colors: {
        "hover-blue": "#509ee3",
        "main-bg": "#F6F7FC",
        "modal-bg": "rgba(0, 0, 0, 0.5)",
        "main-black": "#191E28",
        "main-blue": "#385AE8",
        "main-red": "#EC5A5A",
        "error-red": "#E75B5B",
        "main-gray": "#8188A0",
        "cancel-gray": "#8188A0",
        "inactive-gray": "#95979B",
        "main-green": "#01A801",
        "blue-gray-bg": "#F4F6FA",
        "list-hover": "#F6F7FC",
        "blue-button-hover": "#223FB7",
        "blue-button-disabled": "#A8B4E9",
        "cancel-button-hover": "#696D7A",
        "cancel-button-disabled": "#B6B9C2",
        "kebab-hover": "#E3E6EC",
        "main-line": "#E4E6ED",
        "dark-line": "#ACB5BD",
        "review-marked": "#CFD7F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        toastMove: {
          "0%": {
            marginTop: "10px",
          },
          "100%": {
            marginTop: "0",
          },
        },
        leftTimeBlink: {
          "50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        toastMove: "toastMove 0.4s ease-out forwards",
        leftTimeBlink: "leftTimeBlink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
export default config
