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
      cardH2Desktop: ["28px", { lineHeight: "32px", letterSpacing: "0.004em" }],
      cardH3Desktop: ["28px", { lineHeight: "32px", letterSpacing: "0.004em" }],
      cardIconCaptionDesktop: [
        "18px",
        { lineHeight: "24px", letterSpacing: "0.006em" },
      ],
      cardDescriptionDestkop: [
        "16px",
        { lineHeight: "22px", letterSpacing: "0.0025em" },
      ],
      cardSubtitleDestkop: [
        "21px",
        { lineHeight: "24px", letterSpacing: "0em" },
      ],
      cardDefaultButtonDesktop: [
        "32px",
        { lineHeight: "40px", letterSpacing: "0em" },
      ],
      cardLeadingButtonDesktop: [
        "32px",
        { lineHeight: "40px", letterSpacing: "0em" },
      ],
      cardH2Mobile: ["16px", { lineHeight: "18px", letterSpacing: "0em" }],
      cardH3Mobile: ["16px", { lineHeight: "18px", letterSpacing: "0em" }],
      cardIconCaptionMobile: [
        "13px",
        { lineHeight: "18px", letterSpacing: "0.0035em" },
      ],
      card: ["28px", { lineHeight: "32px", letterSpacing: "0.004em" }],
      cardLeadingButtonMobile: [
        "10px",
        { lineHeight: "16px", letterSpacing: "0.0.006em" },
      ],
    },
    fontFamily: {
      dosis: "Dosis, sans-serif",
      vasirman: "Vazirmatn, sans-serif",
    },
  },
  plugins: [],
};
