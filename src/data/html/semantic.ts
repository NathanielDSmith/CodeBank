const semanticContent = [
  {
    title: 'Basic semantic structure',
    examples: [
      {
        title: 'HTML5 document structure',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n</head>\n<body>\n  <header>\n    <h1>Website Title</h1>\n    <nav>\n      <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#about">About</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <h2>Article Title</h2>\n      <p>Article content goes here...</p>\n    </article>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 My Website</p>\n  </footer>\n</body>\n</html>'
      },
      {
        title: 'Header and navigation',
        code: '<header>\n  <h1>My Company</h1>\n  <nav>\n    <ul>\n      <li><a href="/">Home</a></li>\n      <li><a href="/products">Products</a></li>\n      <li><a href="/contact">Contact</a></li>\n    </ul>\n  </nav>\n</header>'
      }
    ]
  },
  {
    title: 'Content sections',
    examples: [
      {
        title: 'Main content area',
        code: '<main>\n  <section>\n    <h2>About Us</h2>\n    <p>This is the main content about our company.</p>\n  </section>\n  \n  <article>\n    <h2>Latest News</h2>\n    <p>This is an independent article that could be syndicated.</p>\n  </article>\n  \n  <aside>\n    <h3>Related Links</h3>\n    <ul>\n      <li><a href="#">Related Article 1</a></li>\n      <li><a href="#">Related Article 2</a></li>\n    </ul>\n  </aside>\n</main>'
      },
      {
        title: 'Article with sections',
        code: '<article>\n  <header>\n    <h1>How to Make Perfect Coffee</h1>\n    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>\n  </header>\n  \n  <section>\n    <h2>Ingredients</h2>\n    <ul>\n      <li>Fresh coffee beans</li>\n      <li>Hot water</li>\n      <li>Filter</li>\n    </ul>\n  </section>\n  \n  <section>\n    <h2>Instructions</h2>\n    <ol>\n      <li>Grind the beans</li>\n      <li>Heat the water</li>\n      <li>Pour slowly</li>\n    </ol>\n  </section>\n  \n  <footer>\n    <p>Author: Coffee Expert</p>\n  </footer>\n</article>'
      }
    ]
  }
];

export default semanticContent; 