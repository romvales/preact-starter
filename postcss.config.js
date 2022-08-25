module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
    ...(proces.env.NODE_ENV === 'development' ? {} : {
      cssnano: {},
    })
  }
}

