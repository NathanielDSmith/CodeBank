const bordersContent = [
  {
    title: 'Border Properties',
    examples: [
      {
        title: 'Basic Border',
        code: '.bordered {\n  border: 2px solid black;\n}\n\n.thin-border {\n  border: 1px solid #ccc;\n}\n\n.thick-border {\n  border: 5px solid red;\n}'
      },
      {
        title: 'Border Styles',
        code: '.solid {\n  border: 2px solid black;\n}\n\n.dashed {\n  border: 2px dashed gray;\n}\n\n.dotted {\n  border: 2px dotted blue;\n}\n\n.double {\n  border: 4px double green;\n}'
      },
      {
        title: 'Individual Sides',
        code: '.top-border {\n  border-top: 3px solid red;\n}\n\n.bottom-border {\n  border-bottom: 2px dashed blue;\n}\n\n.left-border {\n  border-left: 1px solid green;\n}\n\n.right-border {\n  border-right: 2px dotted orange;\n}'
      }
    ]
  },
  {
    title: 'Border Radius',
    examples: [
      {
        title: 'Rounded Corners',
        code: '.rounded {\n  border-radius: 10px;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.pill {\n  border-radius: 25px;\n}'
      },
      {
        title: 'Individual Corners',
        code: '.custom-corners {\n  border-radius: 10px 20px 30px 40px;\n  /* top-left top-right bottom-right bottom-left */\n}'
      }
    ]
  },
  {
    title: 'Shadows',
    examples: [
      {
        title: 'Box Shadow',
        code: '.shadow {\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.inset-shadow {\n  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.multiple-shadows {\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3),\n              4px 4px 10px rgba(0, 0, 0, 0.2);\n}'
      },
      {
        title: 'Text Shadow',
        code: '.text-shadow {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n.glow {\n  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\n}'
      }
    ]
  }
];

export default bordersContent; 