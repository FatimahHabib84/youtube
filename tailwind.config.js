/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
      "primary": "#ffffff",
                
      "secondary": "#3d3d3d",
                
      "accent": "#aaaaaa",
                
      "neutral": "#aaaaaa",
                
      "base-100": "#181818",
                
      "info": "#3d3d3d",
                
      "success": "#aaaaaa",
                
      "warning": "#ff0000",
                
      "error": "#ff0000",
                },
              },
            ],
          },
  plugins: [require('daisyui'),],
}
