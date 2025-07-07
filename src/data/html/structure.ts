const structureContent = [
  {
    title: 'HTML document structure',
    examples: [
      {
        title: 'Complete HTML5 document',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Page description">\n  <title>Page Title</title>\n  \n  <!-- CSS links -->\n  <link rel="stylesheet" href="styles.css">\n  \n  <!-- Favicon -->\n  <link rel="icon" type="image/x-icon" href="favicon.ico">\n</head>\n<body>\n  <!-- Header -->\n  <header>\n    <h1>Website Title</h1>\n    <nav>\n      <ul>\n        <li><a href="/">Home</a></li>\n        <li><a href="/about">About</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <!-- Main content -->\n  <main>\n    <article>\n      <h2>Article Title</h2>\n      <p>Article content...</p>\n    </article>\n  </main>\n  \n  <!-- Footer -->\n  <footer>\n    <p>&copy; 2024 Website Name</p>\n  </footer>\n  \n  <!-- JavaScript -->\n  <script src="script.js"></script>\n</body>\n</html>'
      },
      {
        title: 'HTML template with comments',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <!-- Character encoding -->\n  <meta charset="UTF-8">\n  \n  <!-- Responsive viewport -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  \n  <!-- SEO meta tags -->\n  <meta name="description" content="Your page description">\n  <meta name="keywords" content="keyword1, keyword2">\n  <meta name="author" content="Your Name">\n  \n  <!-- Page title -->\n  <title>Your Page Title</title>\n  \n  <!-- External resources -->\n  <link rel="stylesheet" href="css/style.css">\n  <link rel="icon" href="favicon.ico">\n</head>\n<body>\n  <!-- Page content goes here -->\n  <h1>Hello World!</h1>\n  \n  <!-- Scripts at the end for better performance -->\n  <script src="js/script.js"></script>\n</body>\n</html>'
      }
    ]
  },
  {
    title: 'Document sections and organization',
    examples: [
      {
        title: 'Organized content sections',
        code: '<body>\n  <!-- Header section -->\n  <header>\n    <div class="logo">\n      <img src="logo.png" alt="Company Logo">\n    </div>\n    <nav class="main-nav">\n      <ul>\n        <li><a href="/">Home</a></li>\n        <li><a href="/products">Products</a></li>\n        <li><a href="/contact">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <!-- Main content area -->\n  <main>\n    <!-- Hero section -->\n    <section class="hero">\n      <h1>Welcome to Our Site</h1>\n      <p>Discover amazing products and services</p>\n    </section>\n    \n    <!-- Features section -->\n    <section class="features">\n      <h2>Our Features</h2>\n      <div class="feature-grid">\n        <article>\n          <h3>Feature 1</h3>\n          <p>Description of feature 1</p>\n        </article>\n        <article>\n          <h3>Feature 2</h3>\n          <p>Description of feature 2</p>\n        </article>\n      </div>\n    </section>\n  </main>\n  \n  <!-- Footer section -->\n  <footer>\n    <div class="footer-content">\n      <p>&copy; 2024 Company Name. All rights reserved.</p>\n    </div>\n  </footer>\n</body>'
      }
    ]
  }
];

export default structureContent; 