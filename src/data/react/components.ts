export default [
  {
    title: 'How to create a component',
    examples: [
      {
        title: 'Functional Component',
        code: 'function MyComponent() {\n  return <div>Hello World</div>;\n}'
      },
      {
        title: 'Arrow Function Component',
        code: 'const MyComponent = () => {\n  return <div>Hello World</div>;\n};'
      },
      {
        title: 'Component with JSX',
        code: 'function Greeting() {\n  return (\n    <div>\n      <h1>Welcome!</h1>\n      <p>This is my first component</p>\n    </div>\n  );\n}'
      }
    ]
  },
  {
    title: 'How to export/import components',
    examples: [
      {
        title: 'Default Export',
        code: 'export default MyComponent;'
      },
      {
        title: 'Named Export',
        code: 'export { MyComponent };'
      },
      {
        title: 'Importing Components',
        code: 'import MyComponent from "./MyComponent";\nimport { Button, Card } from "./components";'
      }
    ]
  },
  {
    title: 'Component composition',
    examples: [
      {
        title: 'Nesting Components',
        code: 'function App() {\n  return (\n    <div>\n      <Header />\n      <MainContent />\n      <Footer />\n    </div>\n  );\n}'
      },
      {
        title: 'Conditional Rendering',
        code: 'function ConditionalComponent({ isVisible }) {\n  return (\n    <div>\n      {isVisible && <p>This is visible!</p>}\n      {!isVisible && <p>This is hidden</p>}\n    </div>\n  );\n}'
      }
    ]
  }
]; 