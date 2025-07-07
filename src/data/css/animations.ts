const animationsContent = [
  {
    title: 'Basic CSS Animations',
    examples: [
      {
        title: 'Simple Fade In',
        code: '@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  animation: fadeIn 1s ease-in;\n}'
      },
      {
        title: 'Hover Effects',
        code: '.button {\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  transform: scale(1.1);\n  background-color: #007bff;\n}'
      },
      {
        title: 'Slide In Animation',
        code: '@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide-in {\n  animation: slideIn 0.5s ease-out;\n}'
      }
    ]
  },
  {
    title: 'Transitions',
    examples: [
      {
        title: 'Color Transition',
        code: '.link {\n  color: blue;\n  transition: color 0.3s ease;\n}\n\n.link:hover {\n  color: red;\n}'
      },
      {
        title: 'Size Transition',
        code: '.box {\n  width: 100px;\n  height: 100px;\n  background: blue;\n  transition: all 0.3s ease;\n}\n\n.box:hover {\n  width: 150px;\n  height: 150px;\n}'
      },
      {
        title: 'Transform Transitions',
        code: '.card {\n  transition: transform 0.3s ease;\n}\n\n.card:hover {\n  transform: rotate(5deg) scale(1.05);\n}'
      }
    ]
  },
  {
    title: 'Animation Properties',
    examples: [
      {
        title: 'Animation Duration',
        code: '.animated {\n  animation: bounce 2s infinite;\n}'
      },
      {
        title: 'Animation Delay',
        code: '.delayed {\n  animation: fadeIn 1s ease-in 0.5s;\n}'
      },
      {
        title: 'Animation Iteration',
        code: '.repeat {\n  animation: pulse 1s ease-in-out 3;\n}'
      }
    ]
  }
];

export default animationsContent; 