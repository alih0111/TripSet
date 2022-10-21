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
    require('@tailwindcss/forms'),
    plugin(function({addVariant}){
      addVariant('label-checked','&:checked ~ label')
    })
  ],
};
