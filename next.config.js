const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production']
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [ 
      'api.lorem.space',
      'placeimg.com',
      'api.escuelajs.co',
      'encrypted-tbn0.gstatic.com',
      'static.nike.com',
      'i0.wp.com',
      'cdn1.coppel.com',
      'pllaceimg.com',
      'elitbuk.ru',
      'firebasestorage.googleapis.com',
      'latqvbedpllwqek.skdesign.ru',
      'www.basketshop.ru',
      'images.pexels.com'
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'static.nike.com',
    //     port: '',
    //   }
    // ]
  }
  // env: {
  //   customKey: 'customValue',
  // },
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev',
  //       permanent: true,
  //     },
  //   ];
  // },
});
