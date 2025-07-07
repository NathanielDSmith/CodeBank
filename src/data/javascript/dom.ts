const domContent = [
  {
    title: 'Selecting elements',
    examples: [
      {
        title: 'Different ways to select elements',
        code: '// Select by ID\nconst elementById = document.getElementById("myId");\n\n// Select by class name\nconst elementsByClass = document.getElementsByClassName("myClass");\n\n// Select by tag name\nconst paragraphs = document.getElementsByTagName("p");\n\n// Modern querySelector (CSS selector)\nconst element = document.querySelector(".myClass");\nconst allElements = document.querySelectorAll(".myClass");\n\n// Select by data attribute\nconst customElement = document.querySelector("[data-testid=\'my-element\']");'
      },
      {
        title: 'Working with selected elements',
        code: 'const button = document.getElementById("myButton");\n\n// Check if element exists\nif (button) {\n  // Change text content\n  button.textContent = "Click me!";\n  \n  // Change inner HTML\n  button.innerHTML = "<strong>Click me!</strong>";\n  \n  // Add/remove classes\n  button.classList.add("active");\n  button.classList.remove("inactive");\n  button.classList.toggle("highlighted");\n}'
      }
    ]
  },
  {
    title: 'Creating and modifying elements',
    examples: [
      {
        title: 'Creating new elements',
        code: '// Create a new paragraph element\nconst newParagraph = document.createElement("p");\nnewParagraph.textContent = "This is a new paragraph";\nnewParagraph.className = "new-paragraph";\n\n// Add it to the page\nconst container = document.getElementById("container");\ncontainer.appendChild(newParagraph);\n\n// Create with attributes\nconst newLink = document.createElement("a");\nnewLink.href = "https://example.com";\nnewLink.textContent = "Visit Example";\nnewLink.target = "_blank";\n\ncontainer.appendChild(newLink);'
      },
      {
        title: 'Removing elements',
        code: '// Remove a specific element\nconst elementToRemove = document.getElementById("removeMe");\nif (elementToRemove && elementToRemove.parentNode) {\n  elementToRemove.parentNode.removeChild(elementToRemove);\n}\n\n// Modern way\nconst element = document.getElementById("removeMe");\nif (element) {\n  element.remove();\n}\n\n// Remove all children\nconst container = document.getElementById("container");\ncontainer.innerHTML = ""; // Clear all content'
      }
    ]
  },
  {
    title: 'Modifying element styles',
    examples: [
      {
        title: 'Changing styles directly',
        code: 'const element = document.getElementById("myElement");\n\n// Change individual styles\nelement.style.backgroundColor = "red";\nelement.style.color = "white";\nelement.style.fontSize = "18px";\nelement.style.padding = "10px";\n\n// Add multiple styles at once\nelement.style.cssText = "background-color: blue; color: white; padding: 20px;";'
      },
      {
        title: 'Working with CSS classes',
        code: 'const element = document.getElementById("myElement");\n\n// Add a class\nelement.classList.add("highlight");\n\n// Remove a class\nelement.classList.remove("hidden");\n\n// Toggle a class\nelement.classList.toggle("active");\n\n// Check if element has a class\nif (element.classList.contains("important")) {\n  console.log("This element is important");\n}\n\n// Replace all classes\nelement.className = "new-class another-class";'
      }
    ]
  }
];

export default domContent; 