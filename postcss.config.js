module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
    ...(process.env.NODE_ENV === 'development' ? {} : {
      cssnano: {},
    })
  }
}

