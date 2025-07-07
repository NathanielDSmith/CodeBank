const bestPracticesContent = [
  {
    title: 'HTML coding standards',
    examples: [
      {
        title: 'Proper indentation and formatting',
        code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Well-Formatted Page</title>\n  </head>\n  <body>\n    <header>\n      <h1>Page Title</h1>\n      <nav>\n        <ul>\n          <li><a href="/">Home</a></li>\n          <li><a href="/about">About</a></li>\n        </ul>\n      </nav>\n    </header>\n    \n    <main>\n      <article>\n        <h2>Article Title</h2>\n        <p>Well-formatted content with proper indentation.</p>\n      </article>\n    </main>\n    \n    <footer>\n      <p>&copy; 2024</p>\n    </footer>\n  </body>\n</html>'
      },
      {
        title: 'Semantic HTML best practices',
        code: '<!-- ✅ GOOD - Semantic structure -->\n<main>\n  <article>\n    <header>\n      <h1>Article Title</h1>\n      <time datetime="2024-01-15">January 15, 2024</time>\n    </header>\n    \n    <section>\n      <h2>Introduction</h2>\n      <p>Article introduction...</p>\n    </section>\n    \n    <section>\n      <h2>Main Content</h2>\n      <p>Main article content...</p>\n    </section>\n    \n    <footer>\n      <p>Author: John Doe</p>\n    </footer>\n  </article>\n</main>\n\n<!-- ❌ BAD - Non-semantic structure -->\n<div>\n  <div>\n    <div>Article Title</div>\n    <div>January 15, 2024</div>\n  </div>\n  <div>\n    <div>Introduction</div>\n    <div>Article introduction...</div>\n  </div>\n</div>'
      }
    ]
  },
  {
    title: 'Performance and accessibility',
    examples: [
      {
        title: 'Optimized images and media',
        code: '<!-- Optimized image with proper attributes -->\n<img src="photo.jpg" \n     alt="Detailed description of the image" \n     width="400" \n     height="300" \n     loading="lazy">\n\n<!-- Responsive image with srcset -->\n<img src="hero-small.jpg" \n     srcset="hero-small.jpg 300w, \n             hero-medium.jpg 600w, \n             hero-large.jpg 900w" \n     sizes="(max-width: 600px) 300px, \n            (max-width: 900px) 600px, \n            900px" \n     alt="Hero image for homepage">\n\n<!-- Video with proper attributes -->\n<video controls preload="metadata">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  <p>Your browser doesn\'t support video playback.</p>\n</video>'
      },
      {
        title: 'Accessible form structure',
        code: '<form>\n  <!-- Proper label association -->\n  <div>\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username" required>\n  </div>\n  \n  <!-- Fieldset for grouped inputs -->\n  <fieldset>\n    <legend>Contact Information</legend>\n    \n    <div>\n      <label for="email">Email:</label>\n      <input type="email" id="email" name="email" required>\n    </div>\n    \n    <div>\n      <label for="phone">Phone:</label>\n      <input type="tel" id="phone" name="phone">\n    </div>\n  </fieldset>\n  \n  <!-- Error message association -->\n  <div>\n    <label for="age">Age:</label>\n    <input type="number" id="age" name="age" \n           aria-describedby="age-error" min="0" max="120">\n    <div id="age-error" role="alert">Age must be between 0 and 120</div>\n  </div>\n  \n  <button type="submit">Submit Form</button>\n</form>'
      }
    ]
  }
];

export default bestPracticesContent; 