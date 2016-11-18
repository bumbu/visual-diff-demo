var defaultOptions = {
  CATEGORY_ID: '5392005022613504',
  EVENT_ID: '6394793986883584',
  APPOINTMENT_ID: '5761475289284608',
  BOOKING_ID: '5733953138851840',
}

module.exports = function(_options) {
  var options = Object.assign({}, defaultOptions, _options);

  return {
    baseFolder: __dirname,

    urlBase: 'http://bumbu.me/',

    delay: 1000, // 1s

    sizes: [
    {
      // Narrow mobile
      width: 320,
      height: 568,
    },
    {
      // Widest mobile
      width: 767,
      height: 568,
    },
    {
      // Large
      width: 1280,
      height: 800,
    }
    ],

    pages: [{
      name: 'home',
      url: `/`,
    }, {
      name: 'about-me',
      url: `/about-me/`,
    }, {
      name: 'contacts',
      url: `/contacts/`,
    }]
  }
}
