const colorsContent = [
  {
    title: 'Color Values',
    examples: [
      {
        title: 'Named Colors',
        code: '.red {\n  color: red;\n}\n\n.blue {\n  color: blue;\n}\n\n.green {\n  color: green;\n}'
      },
      {
        title: 'Hex Colors',
        code: '.hex-red {\n  color: #ff0000;\n}\n\n.hex-blue {\n  color: #0000ff;\n}\n\n.hex-green {\n  color: #00ff00;\n}'
      },
      {
        title: 'RGB Colors',
        code: '.rgb-red {\n  color: rgb(255, 0, 0);\n}\n\n.rgb-blue {\n  color: rgb(0, 0, 255);\n}\n\n.rgba-transparent {\n  color: rgba(0, 0, 0, 0.5);\n}'
      }
    ]
  },
  {
    title: 'Background Colors',
    examples: [
      {
        title: 'Background Color',
        code: '.bg-red {\n  background-color: red;\n}\n\n.bg-blue {\n  background-color: #0000ff;\n}\n\n.bg-transparent {\n  background-color: transparent;\n}'
      },
      {
        title: 'Gradient Backgrounds',
        code: '.gradient {\n  background: linear-gradient(to right, red, blue);\n}\n\n.radial-gradient {\n  background: radial-gradient(circle, red, blue);\n}'
      }
    ]
  },
  {
    title: 'Color Properties',
    examples: [
      {
        title: 'Text Color',
        code: 'body {\n  color: #333333;\n}\n\n.link {\n  color: #0066cc;\n}\n\n.error {\n  color: #cc0000;\n}'
      },
      {
        title: 'Border Color',
        code: '.bordered {\n  border: 2px solid #333333;\n}\n\n.dashed {\n  border: 2px dashed #666666;\n}'
      },
      {
        title: 'Opacity',
        code: '.semi-transparent {\n  opacity: 0.5;\n}\n\n.more-transparent {\n  opacity: 0.2;\n}'
      }
    ]
  }
];

export default colorsContent; 