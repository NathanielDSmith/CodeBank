const validationContent = [
  {
    title: 'HTML validation basics',
    examples: [
      {
        title: 'Valid HTML5 structure',
        code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Valid HTML Page</title>\n</head>\n<body>\n  <header>\n    <h1>Page Title</h1>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Section Title</h2>\n      <p>This is valid HTML5 content.</p>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2024</p>\n  </footer>\n</body>\n</html>'
      },
      {
        title: 'Common validation errors to avoid',
        code: '<!-- ❌ WRONG - Missing DOCTYPE -->\n<html>\n  <head>\n    <title>Invalid Page</title>\n  </head>\n  <body>\n    <h1>Title</h1>\n  </body>\n</html>\n\n<!-- ❌ WRONG - Unclosed tags -->\n<p>This paragraph is not closed\n<h1>Title</h1>\n\n<!-- ❌ WRONG - Invalid nesting -->\n<p>Text <div>Block element inside inline</div></p>\n\n<!-- ✅ CORRECT - Proper structure -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Valid Page</title>\n</head>\n<body>\n  <h1>Title</h1>\n  <p>This paragraph is properly closed.</p>\n  <div>Block element</div>\n</body>\n</html>'
      }
    ]
  },
  {
    title: 'Form validation',
    examples: [
      {
        title: 'HTML5 form validation',
        code: '<form>\n  <!-- Required field -->\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n  \n  <!-- Email validation -->\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  \n  <!-- Pattern validation -->\n  <label for="phone">Phone:</label>\n  <input type="tel" id="phone" name="phone" \n         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" \n         placeholder="123-456-7890">\n  \n  <!-- Min/max values -->\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" \n         min="0" max="120" required>\n  \n  <!-- URL validation -->\n  <label for="website">Website:</label>\n  <input type="url" id="website" name="website">\n  \n  <button type="submit">Submit</button>\n</form>'
      },
      {
        title: 'Custom validation attributes',
        code: '<form>\n  <!-- Custom pattern for username -->\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username" \n         pattern="[a-zA-Z0-9]{3,20}" \n         title="Username must be 3-20 characters, letters and numbers only" \n         required>\n  \n  <!-- Password with minimum length -->\n  <label for="password">Password:</label>\n  <input type="password" id="password" name="password" \n         minlength="8" \n         title="Password must be at least 8 characters long" \n         required>\n  \n  <!-- Date range -->\n  <label for="birthdate">Birth Date:</label>\n  <input type="date" id="birthdate" name="birthdate" \n         min="1900-01-01" max="2024-12-31">\n  \n  <!-- File type restriction -->\n  <label for="photo">Photo:</label>\n  <input type="file" id="photo" name="photo" \n         accept="image/*" \n         title="Please select an image file">\n</form>'
      }
    ]
  }
];

export default validationContent; 