/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#EEE",
        "focused-labs-brand-purple": "#464482",
        "focused-labs-brand-light-purple": "#8C92EF",
        "focused-labs-brand-lighter-purple": "#CECEF2",
        "focused-labs-brand-orange": "#FF714C",
        "focused-labs-text-header-gray": "#2B2340",
        "focused-labs-text-body-gray": "#090318",
        "focused-labs-text-setback-gray": "#767676",
        "focused-labs-background-dark-blue": "#110826",
        "focused-labs-background-light-gray": "#E5E7EB",
        "focused-labs-background-lightest-blue": "#EDF3FF",
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}

