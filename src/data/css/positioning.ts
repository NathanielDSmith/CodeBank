const positioningContent = [
  {
    title: 'Position Properties',
    examples: [
      {
        title: 'Static Positioning',
        code: '.static {\n  position: static;\n  /* Default positioning */\n}'
      },
      {
        title: 'Relative Positioning',
        code: '.relative {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}'
      },
      {
        title: 'Absolute Positioning',
        code: '.absolute {\n  position: absolute;\n  top: 0;\n  right: 0;\n}'
      },
      {
        title: 'Fixed Positioning',
        code: '.fixed {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}'
      }
    ]
  },
  {
    title: 'Z-Index',
    examples: [
      {
        title: 'Layering Elements',
        code: '.overlay {\n  position: absolute;\n  z-index: 1000;\n}'
      },
      {
        title: 'Modal Example',
        code: '.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n}'
      }
    ]
  }
];

export default positioningContent; 