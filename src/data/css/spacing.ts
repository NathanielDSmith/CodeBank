const spacingContent = [
  {
    title: 'Margin and Padding',
    examples: [
      {
        title: 'Basic Margin',
        code: '.box {\n  margin: 10px; /* all sides */\n  margin: 10px 20px; /* top/bottom left/right */\n  margin: 10px 20px 30px 40px; /* top right bottom left */\n}'
      },
      {
        title: 'Basic Padding',
        code: '.container {\n  padding: 20px; /* all sides */\n  padding: 20px 40px; /* top/bottom left/right */\n  padding: 20px 40px 30px 50px; /* top right bottom left */\n}'
      },
      {
        title: 'Individual Sides',
        code: '.element {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  margin-left: 25px;\n  \n  padding-top: 5px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n}'
      }
    ]
  },
  {
    title: 'Box Model',
    examples: [
      {
        title: 'Box Model Properties',
        code: '.box {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n  box-sizing: border-box;\n}'
      },
      {
        title: 'Border Box vs Content Box',
        code: '/* Content box (default) */\n.content-box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  /* Total width = 200 + 40 + 4 = 244px */\n}\n\n/* Border box */\n.border-box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  box-sizing: border-box;\n  /* Total width = 200px */\n}'
      }
    ]
  },
  {
    title: 'Spacing Utilities',
    examples: [
      {
        title: 'Gap Property',
        code: '.grid {\n  display: grid;\n  gap: 20px; /* row and column gap */\n  row-gap: 10px;\n  column-gap: 30px;\n}'
      },
      {
        title: 'Space Between',
        code: '.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}'
      },
      {
        title: 'Centering with Auto Margins',
        code: '.centered {\n  width: 200px;\n  margin: 0 auto; /* centers horizontally */\n}'
      }
    ]
  }
];

export default spacingContent; 