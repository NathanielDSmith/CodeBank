const mediaContent = [
  {
    title: 'Basic Media Queries',
    examples: [
      {
        title: 'Screen Size Breakpoints',
        code: '/* Mobile first approach */\n.container {\n  width: 100%;\n  padding: 1rem;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n    margin: 0 auto;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .container {\n    width: 1200px;\n  }\n}'
      },
      {
        title: 'Orientation',
        code: '/* Portrait */\n@media (orientation: portrait) {\n  .header {\n    height: 60px;\n  }\n}\n\n/* Landscape */\n@media (orientation: landscape) {\n  .header {\n    height: 40px;\n  }\n}'
      },
      {
        title: 'Max Width',
        code: '/* Small screens */\n@media (max-width: 600px) {\n  .sidebar {\n    display: none;\n  }\n  .main {\n    width: 100%;\n  }\n}'
      }
    ]
  },
  {
    title: 'Responsive Design',
    examples: [
      {
        title: 'Flexible Images',
        code: '.responsive-img {\n  max-width: 100%;\n  height: auto;\n}\n\n.hero-image {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}'
      },
      {
        title: 'Responsive Typography',
        code: 'body {\n  font-size: 16px;\n}\n\n@media (min-width: 768px) {\n  body {\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 1024px) {\n  body {\n    font-size: 20px;\n  }\n}'
      },
      {
        title: 'Responsive Grid',
        code: '.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}'
      }
    ]
  },
  {
    title: 'Device Specific',
    examples: [
      {
        title: 'Print Styles',
        code: '@media print {\n  .no-print {\n    display: none;\n  }\n  \n  body {\n    font-size: 12pt;\n    line-height: 1.5;\n  }\n}'
      },
      {
        title: 'High DPI Screens',
        code: '@media (-webkit-min-device-pixel-ratio: 2),\n       (min-resolution: 192dpi) {\n  .icon {\n    background-image: url("icon@2x.png");\n  }\n}'
      }
    ]
  }
];

export default mediaContent; 