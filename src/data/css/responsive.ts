const responsiveContent = [
  {
    title: 'Media Queries',
    examples: [
      {
        title: 'Mobile First',
        code: '/* Base styles for mobile */\n.container {\n  width: 100%;\n  padding: 1rem;\n}\n\n/* Tablet and up */\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n    margin: 0 auto;\n  }\n}'
      },
      {
        title: 'Desktop Styles',
        code: '/* Desktop styles */\n@media (min-width: 1024px) {\n  .container {\n    width: 1200px;\n  }\n}'
      },
      {
        title: 'Landscape Orientation',
        code: '@media (orientation: landscape) {\n  .header {\n    height: 60px;\n  }\n}'
      }
    ]
  },
  {
    title: 'Responsive Images',
    examples: [
      {
        title: 'Fluid Images',
        code: '.responsive-img {\n  max-width: 100%;\n  height: auto;\n}'
      },
      {
        title: 'Picture Element',
        code: '<picture>\n  <source media="(min-width: 768px)" srcset="large.jpg">\n  <source media="(min-width: 480px)" srcset="medium.jpg">\n  <img src="small.jpg" alt="Responsive image">\n</picture>'
      }
    ]
  }
];

export default responsiveContent; 