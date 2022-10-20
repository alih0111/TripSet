const plugin=require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      yekan: "vazir",
    },
    extend: {
      padding: {
        md: "56%",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({addVariant}){
      addVariant('radio-checked','&:checked ~ label')
    })
  ],
};
