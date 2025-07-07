const formsContent = [
  {
    title: 'Basic form structure',
    examples: [
      {
        title: 'Simple contact form',
        code: '<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n  \n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  \n  <label for="message">Message:</label>\n  <textarea id="message" name="message" rows="4"></textarea>\n  \n  <button type="submit">Send Message</button>\n</form>'
      },
      {
        title: 'Form with different input types',
        code: '<form>\n  <!-- Text input -->\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username" placeholder="Enter username">\n  \n  <!-- Password input -->\n  <label for="password">Password:</label>\n  <input type="password" id="password" name="password">\n  \n  <!-- Email input -->\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  \n  <!-- Number input -->\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" min="0" max="120">\n  \n  <!-- Date input -->\n  <label for="birthday">Birthday:</label>\n  <input type="date" id="birthday" name="birthday">\n</form>'
      }
    ]
  },
  {
    title: 'Form controls and validation',
    examples: [
      {
        title: 'Radio buttons and checkboxes',
        code: '<form>\n  <!-- Radio buttons (single choice) -->\n  <fieldset>\n    <legend>Choose your favorite color:</legend>\n    <input type="radio" id="red" name="color" value="red">\n    <label for="red">Red</label>\n    \n    <input type="radio" id="blue" name="color" value="blue">\n    <label for="blue">Blue</label>\n    \n    <input type="radio" id="green" name="color" value="green">\n    <label for="green">Green</label>\n  </fieldset>\n  \n  <!-- Checkboxes (multiple choice) -->\n  <fieldset>\n    <legend>Select your interests:</legend>\n    <input type="checkbox" id="sports" name="interests" value="sports">\n    <label for="sports">Sports</label>\n    \n    <input type="checkbox" id="music" name="interests" value="music">\n    <label for="music">Music</label>\n    \n    <input type="checkbox" id="books" name="interests" value="books">\n    <label for="books">Books</label>\n  </fieldset>\n</form>'
      },
      {
        title: 'Select dropdown and textarea',
        code: '<form>\n  <!-- Dropdown select -->\n  <label for="country">Country:</label>\n  <select id="country" name="country">\n    <option value="">Choose a country</option>\n    <option value="us">United States</option>\n    <option value="ca">Canada</option>\n    <option value="uk">United Kingdom</option>\n    <option value="au">Australia</option>\n  </select>\n  \n  <!-- Textarea for longer text -->\n  <label for="comments">Comments:</label>\n  <textarea id="comments" name="comments" rows="5" cols="50" placeholder="Enter your comments here..."></textarea>\n  \n  <!-- File upload -->\n  <label for="photo">Upload Photo:</label>\n  <input type="file" id="photo" name="photo" accept="image/*">\n</form>'
      }
    ]
  }
];

export default formsContent; 