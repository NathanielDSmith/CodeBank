const centeringContent = [
  {
    title: 'How to center things',
    examples: [
      {
        title: 'Flexbox Centering',
        code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
      },
      {
        title: 'Grid Centering',
        code: '.container {\n  display: grid;\n  place-items: center;\n}'
      },
      {
        title: 'Text Centering',
        code: '.text-center {\n  text-align: center;\n}'
      },
      {
        title: 'Absolute Centering',
        code: '.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}'
      }
    ]
  },
  {
    title: 'How to center vertically',
    examples: [
      {
        title: 'Using Flexbox',
        code: '.container {\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n}'
      },
      {
        title: 'Using Grid',
        code: '.container {\n  display: grid;\n  align-items: center;\n  min-height: 100vh;\n}'
      },
      {
        title: 'Using Line Height',
        code: '.centered-text {\n  line-height: 100vh;\n  text-align: center;\n}'
      }
    ]
  },
  {
    title: 'How to center horizontally',
    examples: [
      {
        title: 'Block Element Centering',
        code: '.centered-block {\n  margin: 0 auto;\n  width: fit-content;\n}'
      },
      {
        title: 'Flexbox Horizontal',
        code: '.container {\n  display: flex;\n  justify-content: center;\n}'
      },
      {
        title: 'Grid Horizontal',
        code: '.container {\n  display: grid;\n  justify-items: center;\n}'
      }
    ]
  }
];

export default centeringContent; 