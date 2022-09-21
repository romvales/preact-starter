module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'development' ? {} : {
      cssnano: {},
    }),
    'postcss-preset-env': {
      features: { 'nesting-rules': false, },
    },
    autoprefixer: {},
  }
}

