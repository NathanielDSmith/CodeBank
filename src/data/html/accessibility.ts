const accessibilityContent = [
  {
    title: 'ARIA labels and roles',
    examples: [
      {
        title: 'Basic ARIA attributes',
        code: '<!-- Button with aria-label -->\n<button aria-label="Close dialog">×</button>\n\n<!-- Navigation with role -->\n<nav role="navigation" aria-label="Main navigation">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n  </ul>\n</nav>\n\n<!-- Form with aria-describedby -->\n<label for="password">Password:</label>\n<input type="password" id="password" aria-describedby="password-help">\n<div id="password-help">Password must be at least 8 characters long</div>\n\n<!-- Progress bar -->\n<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">\n  75% Complete\n</div>'
      },
      {
        title: 'Landmarks and regions',
        code: '<!-- Main content area -->\n<main role="main">\n  <h1>Page Title</h1>\n  <p>Main content goes here...</p>\n</main>\n\n<!-- Complementary content -->\n<aside role="complementary" aria-label="Related articles">\n  <h2>Related Articles</h2>\n  <ul>\n    <li><a href="#">Article 1</a></li>\n    <li><a href="#">Article 2</a></li>\n  </ul>\n</aside>\n\n<!-- Banner/header -->\n<header role="banner">\n  <h1>Website Name</h1>\n</header>\n\n<!-- Content info/footer -->\n<footer role="contentinfo">\n  <p>&copy; 2024 Website Name</p>\n</footer>'
      }
    ]
  },
  {
    title: 'Semantic HTML for accessibility',
    examples: [
      {
        title: 'Proper heading structure',
        code: '<h1>Main Page Title</h1>\n\n<section>\n  <h2>Section Title</h2>\n  <p>Section content...</p>\n  \n  <article>\n    <h3>Article Title</h3>\n    <p>Article content...</p>\n  </article>\n</section>\n\n<section>\n  <h2>Another Section</h2>\n  <p>More content...</p>\n</section>'
      },
      {
        title: 'Accessible forms and inputs',
        code: '<!-- Proper form labels -->\n<form>\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username" required>\n  \n  <!-- Fieldset for grouped inputs -->\n  <fieldset>\n    <legend>Contact Information</legend>\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    \n    <label for="phone">Phone:</label>\n    <input type="tel" id="phone" name="phone">\n  </fieldset>\n  \n  <!-- Error message association -->\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" aria-describedby="age-error">\n  <div id="age-error" role="alert">Age must be between 0 and 120</div>\n</form>'
      }
    ]
  }
];

export default accessibilityContent; 