import { defineConfig } from "windicss/helpers"

export default defineConfig({
  darkMode: "class",
  theme: {},
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  shortcuts: {
    "functional-btn":
      "px-2 py-1 font-semibold rounded-lg shadow-md bg-pink-500 text-white",
    inputFunction:
      "w-8 text-gray-500 font-bold border-2 border-solid border-gray-500 outline-none pl-2 pr-1 border-l-0",
    "operations-buttons":
      "mt-2 block bg-purple-500 text-white px-2 py-1 rounded",
  },
})
