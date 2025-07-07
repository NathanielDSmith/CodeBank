const navigationContent = [
  {
    title: 'Links and anchors',
    examples: [
      {
        title: 'Basic links',
        code: '<!-- External link -->\n<a href="https://www.example.com">Visit Example.com</a>\n\n<!-- Internal link -->\n<a href="/about">About Us</a>\n\n<!-- Link to specific section -->\n<a href="#contact">Contact Section</a>\n\n<!-- Email link -->\n<a href="mailto:info@example.com">Send us an email</a>\n\n<!-- Phone link -->\n<a href="tel:+1234567890">Call us</a>\n\n<!-- Download link -->\n<a href="document.pdf" download>Download PDF</a>'
      },
      {
        title: 'Navigation menu',
        code: '<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/products">Products</a></li>\n    <li><a href="/services">Services</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>\n\n<!-- Dropdown navigation -->\n<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li>\n      <a href="/products">Products</a>\n      <ul>\n        <li><a href="/products/electronics">Electronics</a></li>\n        <li><a href="/products/clothing">Clothing</a></li>\n        <li><a href="/products/books">Books</a></li>\n      </ul>\n    </li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>'
      }
    ]
  },
  {
    title: 'Breadcrumbs and pagination',
    examples: [
      {
        title: 'Breadcrumb navigation',
        code: '<nav aria-label="Breadcrumb">\n  <ol>\n    <li><a href="/">Home</a></li>\n    <li><a href="/products">Products</a></li>\n    <li><a href="/products/electronics">Electronics</a></li>\n    <li aria-current="page">Smartphones</li>\n  </ol>\n</nav>'
      },
      {
        title: 'Pagination',
        code: '<nav aria-label="Page navigation">\n  <ul>\n    <li><a href="?page=1" aria-label="Previous">«</a></li>\n    <li><a href="?page=1">1</a></li>\n    <li><a href="?page=2">2</a></li>\n    <li><a href="?page=3" aria-current="page">3</a></li>\n    <li><a href="?page=4">4</a></li>\n    <li><a href="?page=5">5</a></li>\n    <li><a href="?page=4" aria-label="Next">»</a></li>\n  </ul>\n</nav>'
      }
    ]
  }
];

export default navigationContent; 