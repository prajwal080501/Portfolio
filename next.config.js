/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
  reactStrictMode: true,
  images: {
    domains: [
      'img.freepik.com', 
      'cdn.sanity.io'],
  },
  theme: {
    extend: {
      FontFace: {
        'font-family': 'Pacifico',
        src: 'url(../public/fonts/Pacifico.ttf)',
        'font-weight': 'normal',
        'font-style': 'normal'
      },
      colors: {
        'primary': '#F9A826',
        'secondary': '#F9A826',
        'tertiary': '#F9A826',
        'quaternary': '#F9A826',
        'quinary': '#F9A826',
        'senary': '#F9A826',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Menlo', 'monospace'],
        'display': ['Pacifico', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  }
}

module.exports = nextConfig
