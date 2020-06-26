module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato'],
      'serif': ['Lora'],
    },
    container: {
      center: true,
      padding: '2rem'
    },
    gradients: theme => ({
      // Array definition (defaults to linear gradients).
      'topaz': ['30deg', theme('colors.orange.500'), theme('colors.pink.400')],
      'topaz-dark': ['30deg', theme('colors.orange.700'), theme('colors.pink.600')],
      'emerald-to-right': ['to right', theme('colors.teal.500'), theme('colors.green.500')],
      'emerald-to-left': ['to left', theme('colors.teal.500'), theme('colors.green.500')],
      'azure': ['to right', theme('colors.blue.900'), theme('colors.green.500')],
      'fireopal': ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
      'relay': ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],

      // Object definition.
      'mono-circle': {
        type: 'radial',
        colors: ['circle', '#CCC', '#000']
      },
    }),
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ],
}
