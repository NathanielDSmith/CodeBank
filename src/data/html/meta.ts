const metaContent = [
  {
    title: 'Essential meta tags',
    examples: [
      {
        title: 'Basic meta tags for every page',
        code: '<head>\n  <!-- Character encoding -->\n  <meta charset="UTF-8">\n  \n  <!-- Viewport for responsive design -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  \n  <!-- Page description for search engines -->\n  <meta name="description" content="Learn HTML basics with practical examples and tutorials">\n  \n  <!-- Keywords (less important for SEO now) -->\n  <meta name="keywords" content="HTML, web development, coding, tutorials">\n  \n  <!-- Author information -->\n  <meta name="author" content="Your Name">\n  \n  <!-- Page title -->\n  <title>HTML Basics - Learn Web Development</title>\n</head>'
      },
      {
        title: 'Social media meta tags',
        code: '<head>\n  <!-- Open Graph tags for Facebook/LinkedIn -->\n  <meta property="og:title" content="HTML Basics Tutorial">\n  <meta property="og:description" content="Learn HTML fundamentals with practical examples">\n  <meta property="og:image" content="https://example.com/og-image.jpg">\n  <meta property="og:url" content="https://example.com/html-basics">\n  <meta property="og:type" content="website">\n  \n  <!-- Twitter Card tags -->\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="HTML Basics Tutorial">\n  <meta name="twitter:description" content="Learn HTML fundamentals with practical examples">\n  <meta name="twitter:image" content="https://example.com/twitter-image.jpg">\n</head>'
      }
    ]
  },
  {
    title: 'Advanced meta tags',
    examples: [
      {
        title: 'Security and performance meta tags',
        code: '<head>\n  <!-- Security headers -->\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta http-equiv="Content-Security-Policy" content="default-src \'self\'">\n  \n  <!-- Cache control -->\n  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">\n  <meta http-equiv="Pragma" content="no-cache">\n  <meta http-equiv="Expires" content="0">\n  \n  <!-- Robots and indexing -->\n  <meta name="robots" content="index, follow">\n  <meta name="googlebot" content="index, follow">\n  \n  <!-- Theme color for mobile browsers -->\n  <meta name="theme-color" content="#4285f4">\n</head>'
      },
      {
        title: 'Mobile and app meta tags',
        code: '<head>\n  <!-- Mobile app meta tags -->\n  <meta name="apple-mobile-web-app-capable" content="yes">\n  <meta name="apple-mobile-web-app-status-bar-style" content="black">\n  <meta name="apple-mobile-web-app-title" content="My App">\n  \n  <!-- Windows tile meta tags -->\n  <meta name="msapplication-TileColor" content="#4285f4">\n  <meta name="msapplication-TileImage" content="tile.png">\n  \n  <!-- Favicon and app icons -->\n  <link rel="icon" type="image/x-icon" href="/favicon.ico">\n  <link rel="apple-touch-icon" href="/apple-touch-icon.png">\n</head>'
      }
    ]
  }
];

export default metaContent; 