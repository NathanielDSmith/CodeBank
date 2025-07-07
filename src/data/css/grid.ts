const gridContent = [
  {
    title: 'CSS Grid Basics',
    examples: [
      {
        title: 'Basic Grid',
        code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}'
      },
      {
        title: 'Grid Areas',
        code: '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 200px 1fr;\n}'
      },
      {
        title: 'Responsive Grid',
        code: '.responsive-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}'
      }
    ]
  },
  {
    title: 'Grid Properties',
    examples: [
      {
        title: 'Grid Template Columns',
        code: '.grid {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n}'
      },
      {
        title: 'Grid Template Rows',
        code: '.grid {\n  display: grid;\n  grid-template-rows: 100px 1fr 100px;\n}'
      },
      {
        title: 'Grid Gap',
        code: '.grid {\n  display: grid;\n  gap: 1rem;\n  /* or */\n  row-gap: 1rem;\n  column-gap: 2rem;\n}'
      }
    ]
  },
  {
    title: 'Grid Positioning',
    examples: [
      {
        title: 'Grid Column Span',
        code: '.item {\n  grid-column: span 2;\n}'
      },
      {
        title: 'Grid Row Span',
        code: '.item {\n  grid-row: span 2;\n}'
      },
      {
        title: 'Grid Area',
        code: '.header {\n  grid-area: header;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}'
      }
    ]
  }
];

export default gridContent; 