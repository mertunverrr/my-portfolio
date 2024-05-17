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
        lg: '940px',
        xl: '940px',
        '2xl': '940px',
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
        '120' : '30rem',
        '92' : '23rem',
        '0.25' : '1px',
        '1.25' : '5px',
        '38' : '9.5rem',
        '18' : '4.5rem',
        '23' : '5.75rem',
      },
      rotate : {
        '30' : '30deg'
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
      },
      listStyleImage: {
        checkmark: 'url("../assets/check.svg")',
      },
    },
  },
  plugins: [],
}

