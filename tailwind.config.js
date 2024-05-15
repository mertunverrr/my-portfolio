/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container : {
      center:true,
      screens: {
        lg: '968px',
        xl: '968px',
        '2xl': '968px',
      }
    },

    extend: {
      fontFamily: {
        poppins:['Poppins' , 'sans-serif'],
      },
      colors: {
        titleColor: "hsl(0 , 0% , 20%)",
        titleDarkColor: "hsl(0 ,0%, 0%)",
        textColor: "hsl(0, 0%, 46%)",
        bodyColor: "hsl(0, 0%, 98%)",
        containerColor: "#fff"
      },
      spacing: {
        '120' : '30rem'
      },
      animation: {
        'profileAnim' : 'profileAnimate 6s ease-in-out infinite',
        'bounceMouse' : 'bounceScroll 3s ease-in-out infinite 2s'
      },
      keyframes: {
        profileAnimate: {
          '0%' : {borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%' : {borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'},
          '100%' : {borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'}
        },
        bounceScroll: {
          '0%, 100%': {
              transform: 'translateY(-25%)'
          },
          '50%': {
              transform: 'none'
          }
      }
      }
    },
  },
  plugins: [],
}
