const tablesContent = [
  {
    title: 'HTML tables',
    examples: [
      {
        title: 'Basic table structure',
        code: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>City</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John Doe</td>\n      <td>25</td>\n      <td>New York</td>\n    </tr>\n    <tr>\n      <td>Jane Smith</td>\n      <td>30</td>\n      <td>Los Angeles</td>\n    </tr>\n    <tr>\n      <td>Bob Johnson</td>\n      <td>28</td>\n      <td>Chicago</td>\n    </tr>\n  </tbody>\n</table>'
      },
      {
        title: 'Complex table with colspan and rowspan',
        code: '<table border="1">\n  <thead>\n    <tr>\n      <th rowspan="2">Name</th>\n      <th colspan="2">Contact</th>\n      <th rowspan="2">Age</th>\n    </tr>\n    <tr>\n      <th>Email</th>\n      <th>Phone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John Doe</td>\n      <td>john@email.com</td>\n      <td>555-1234</td>\n      <td>25</td>\n    </tr>\n    <tr>\n      <td>Jane Smith</td>\n      <td>jane@email.com</td>\n      <td>555-5678</td>\n      <td>30</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="4">Total: 2 people</td>\n    </tr>\n  </tfoot>\n</table>'
      }
    ]
  },
  {
    title: 'Lists and data',
    examples: [
      {
        title: 'Unordered and ordered lists',
        code: '<!-- Unordered list (bullets) -->\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Orange</li>\n  <li>Grape</li>\n</ul>\n\n<!-- Ordered list (numbers) -->\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n  <li>Third step</li>\n</ol>\n\n<!-- Nested lists -->\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Apple</li>\n      <li>Banana</li>\n    </ul>\n  </li>\n  <li>Vegetables\n    <ul>\n      <li>Carrot</li>\n      <li>Broccoli</li>\n    </ul>\n  </li>\n</ul>'
      },
      {
        title: 'Definition lists',
        code: '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language - the standard markup language for web pages.</dd>\n  \n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets - used for styling and layout of web pages.</dd>\n  \n  <dt>JavaScript</dt>\n  <dd>A programming language that adds interactivity to web pages.</dd>\n</dl>'
      }
    ]
  }
];

export default tablesContent; 