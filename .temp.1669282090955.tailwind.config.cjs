module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        firmaroed: "#C0363F",
        gul: "#D1B245",
        groen: "#449B71",
        moerkegraa: "#322C2C",
        hvid: "#F0F0F0",
      },
    },
    fontSize: {
      card-h2: ["67px", { lineHeight: "66px", letterSpacing: "-0.063em" }],
    },
    fontFamily: {
      dosis: "Dosis, sans-serif",
      vasirman: "Vazirmatn, sans-serif",
    },
  },
  plugins: [],
};
