const templatesContent = [
  {
    title: 'Common page templates',
    examples: [
      {
        title: 'Basic landing page template',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Landing Page</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <!-- Header -->\n  <header>\n    <nav>\n      <div class="logo">\n        <img src="logo.png" alt="Company Logo">\n      </div>\n      <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#features">Features</a></li>\n        <li><a href="#contact">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <!-- Hero Section -->\n  <section id="home" class="hero">\n    <h1>Welcome to Our Platform</h1>\n    <p>Discover amazing features and solutions</p>\n    <button>Get Started</button>\n  </section>\n  \n  <!-- Features Section -->\n  <section id="features" class="features">\n    <h2>Our Features</h2>\n    <div class="feature-grid">\n      <article>\n        <h3>Feature 1</h3>\n        <p>Description of feature 1</p>\n      </article>\n      <article>\n        <h3>Feature 2</h3>\n        <p>Description of feature 2</p>\n      </article>\n    </div>\n  </section>\n  \n  <!-- Contact Section -->\n  <section id="contact" class="contact">\n    <h2>Contact Us</h2>\n    <form>\n      <input type="text" placeholder="Name" required>\n      <input type="email" placeholder="Email" required>\n      <textarea placeholder="Message"></textarea>\n      <button type="submit">Send</button>\n    </form>\n  </section>\n  \n  <!-- Footer -->\n  <footer>\n    <p>&copy; 2024 Company Name. All rights reserved.</p>\n  </footer>\n</body>\n</html>'
      },
      {
        title: 'Blog post template',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Blog Post Title</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/blog">Blog</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <header>\n        <h1>Blog Post Title</h1>\n        <time datetime="2024-01-15">January 15, 2024</time>\n        <p>By <span class="author">Author Name</span></p>\n      </header>\n      \n      <section class="content">\n        <p>Introduction paragraph...</p>\n        \n        <h2>First Section</h2>\n        <p>Content for first section...</p>\n        \n        <h2>Second Section</h2>\n        <p>Content for second section...</p>\n      </section>\n      \n      <footer>\n        <div class="tags">\n          <span class="tag">HTML</span>\n          <span class="tag">Web Development</span>\n        </div>\n      </footer>\n    </article>\n    \n    <aside>\n      <h3>Related Posts</h3>\n      <ul>\n        <li><a href="#">Related Post 1</a></li>\n        <li><a href="#">Related Post 2</a></li>\n      </ul>\n    </aside>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024 Blog Name</p>\n  </footer>\n</body>\n</html>'
      }
    ]
  },
  {
    title: 'Form and component templates',
    examples: [
      {
        title: 'Contact form template',
        code: '<form class="contact-form">\n  <h2>Contact Us</h2>\n  \n  <div class="form-group">\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="name" required>\n  </div>\n  \n  <div class="form-group">\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n  </div>\n  \n  <div class="form-group">\n    <label for="subject">Subject:</label>\n    <select id="subject" name="subject">\n      <option value="">Choose a subject</option>\n      <option value="general">General Inquiry</option>\n      <option value="support">Technical Support</option>\n      <option value="sales">Sales Question</option>\n    </select>\n  </div>\n  \n  <div class="form-group">\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="5" required></textarea>\n  </div>\n  \n  <div class="form-group">\n    <label>\n      <input type="checkbox" name="newsletter" value="yes">\n      Subscribe to newsletter\n    </label>\n  </div>\n  \n  <button type="submit">Send Message</button>\n</form>'
      },
      {
        title: 'Product card template',
        code: '<article class="product-card">\n  <div class="product-image">\n    <img src="product.jpg" alt="Product Name">\n    <span class="badge">New</span>\n  </div>\n  \n  <div class="product-info">\n    <h3>Product Name</h3>\n    <p class="description">Product description goes here...</p>\n    \n    <div class="price">\n      <span class="current-price">$29.99</span>\n      <span class="original-price">$39.99</span>\n    </div>\n    \n    <div class="rating">\n      <span class="stars">★★★★☆</span>\n      <span class="reviews">(24 reviews)</span>\n    </div>\n    \n    <button class="add-to-cart">Add to Cart</button>\n  </div>\n</article>'
      }
    ]
  }
];

export default templatesContent; 