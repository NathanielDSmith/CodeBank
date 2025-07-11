const eventsContent = [
  {
    title: 'Event handling basics',
    examples: [
      {
        title: 'Adding event listeners',
        code: '// Get an element\nconst button = document.getElementById("myButton");\n\n// Add click event listener\nbutton.addEventListener("click", function() {\n  console.log("Button clicked!");\n});\n\n// Or using arrow function\nbutton.addEventListener("click", () => {\n  alert("Button was clicked!");\n});'
      },
      {
        title: 'Common event types',
        code: 'const element = document.getElementById("myElement");\n\n// Click event\nelement.addEventListener("click", () => console.log("Clicked"));\n\n// Mouse events\nelement.addEventListener("mouseenter", () => console.log("Mouse entered"));\nelement.addEventListener("mouseleave", () => console.log("Mouse left"));\n\n// Keyboard events\ndocument.addEventListener("keydown", (event) => {\n  console.log(`Key pressed: ${event.key}`);\n});\n\n// Form events\nconst form = document.getElementById("myForm");\nform.addEventListener("submit", (event) => {\n  event.preventDefault(); // Prevent form submission\n  console.log("Form submitted");\n});'
      }
    ]
  },
  {
    title: 'Event object and handling',
    examples: [
      {
        title: 'Using the event object',
        code: 'const button = document.getElementById("myButton");\n\nbutton.addEventListener("click", (event) => {\n  console.log("Event type:", event.type);\n  console.log("Target element:", event.target);\n  console.log("Mouse position:", event.clientX, event.clientY);\n  \n  // Prevent default behavior\n  event.preventDefault();\n});'
      },
      {
        title: 'Event delegation',
        code: '// Instead of adding listeners to each item\nconst list = document.getElementById("myList");\n\n// Add one listener to the parent\nlist.addEventListener("click", (event) => {\n  // Check if the clicked element is a list item\n  if (event.target.tagName === "LI") {\n    console.log("List item clicked:", event.target.textContent);\n  }\n});\n\n// This works even for new items added later!'
      }
    ]
  }
];

export default eventsContent; 