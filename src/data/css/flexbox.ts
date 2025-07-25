const flexboxContent = [
  {
    title: 'How to make responsive grid',
    examples: [
      {
        title: 'Basic Flexbox Grid',
        code: '.grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}'
      },
      {
        title: 'Responsive Flex Items',
        code: '.item {\n  flex: 1;\n  min-width: 200px;\n}'
      },
      {
        title: 'Flexbox Navigation',
        code: '.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}'
      }
    ]
  },
  {
    title: 'Flexbox properties',
    examples: [
      {
        title: 'Flex Direction',
        code: '.container {\n  display: flex;\n  flex-direction: row; /* or column */\n}'
      },
      {
        title: 'Flex Grow and Shrink',
        code: '.flex-item {\n  flex: 1 1 auto; /* grow shrink basis */\n}'
      },
      {
        title: 'Flex Basis',
        code: '.item {\n  flex-basis: 200px;\n  flex-grow: 1;\n}'
      }
    ]
  },
  {
    title: 'How to make sticky header',
    examples: [
      {
        title: 'Sticky Header',
        code: '.header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}'
      },
      {
        title: 'Flexbox Layout',
        code: '.layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.main {\n  flex: 1;\n}'
      }
    ]
  }
];

export default flexboxContent; 