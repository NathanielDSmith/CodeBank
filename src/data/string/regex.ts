const regexContent = [
  {
    title: 'Basic Regular Expressions',
    examples: [
      {
        title: 'Simple pattern matching',
        code: '// Basic pattern matching\nlet text = "Hello World 123";\nlet hasNumbers = /\\d/.test(text); // true\nlet hasLetters = /[a-zA-Z]/.test(text); // true\n\n// Finding matches\nlet sentence = "The quick brown fox jumps over the lazy dog";\nlet foxMatch = sentence.match(/fox/); // ["fox"]\nlet allWords = sentence.match(/\\w+/g); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]\n\n// Replacing with regex\nlet dirtyText = "Hello   World   with   spaces";\nlet cleaned = dirtyText.replace(/\\s+/g, " "); // "Hello World with spaces"\n\n// Extracting numbers\nlet mixedText = "Price: $19.99, Quantity: 5";\nlet numbers = mixedText.match(/\\d+(\\.\\d+)?/g); // ["19.99", "5"]\n\n// Checking if string starts/ends with pattern\nlet filename = "document.pdf";\nlet isPdf = /\\.pdf$/i.test(filename); // true\nlet startsWithDoc = /^doc/i.test(filename); // true'
      },
      {
        title: 'Common regex patterns',
        code: '// Email validation\nlet emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nlet validEmail = "user@example.com";\nlet isValid = emailRegex.test(validEmail); // true\n\n// Phone number validation\nlet phoneRegex = /^\\+?[1-9]\\d{1,14}$/;\nlet phone = "+1-555-123-4567";\nlet cleanPhone = phone.replace(/[\\s\\-\\(\\)]/g, "");\nlet isValidPhone = phoneRegex.test(cleanPhone); // true\n\n// Password strength\nlet password = "Password123!";\nlet hasLower = /[a-z]/.test(password); // true\nlet hasUpper = /[A-Z]/.test(password); // true\nlet hasNumber = /\\d/.test(password); // true\nlet hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password); // true\n\n// URL validation\nlet urlRegex = /^https?:\\/\\/[^\\s/$.?#].[^\\s]*$/i;\nlet url = "https://example.com";\nlet isValidUrl = urlRegex.test(url); // true'
      }
    ]
  },
  {
    title: 'Advanced Regex Techniques',
    examples: [
      {
        title: 'Capturing groups and replacements',
        code: '// Capturing groups\nlet date = "2024-01-15";\nlet dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;\nlet match = date.match(dateRegex);\n// match[1] = "2024", match[2] = "01", match[3] = "15"\n\n// Replacing with captured groups\nlet formattedDate = date.replace(dateRegex, "$2/$3/$1"); // "01/15/2024"\n\n// Named capture groups (ES2018)\nlet nameRegex = /(?<firstName>\\w+)\\s+(?<lastName>\\w+)/;\nlet fullName = "John Doe";\nlet nameMatch = fullName.match(nameRegex);\n// nameMatch.groups.firstName = "John", nameMatch.groups.lastName = "Doe"\n\n// Lookahead and lookbehind\nlet password = "password123";\nlet hasLetterBeforeNumber = /(?=.*[a-zA-Z])(?=.*\\d)/.test(password); // true\n\n// Non-capturing groups\nlet text = "color colour";\nlet colorRegex = /colou?r/g;\nlet matches = text.match(colorRegex); // ["color", "colour"]\n\n// Conditional regex\nlet version = "v1.2.3";\nlet versionRegex = /v(\\d+)(?:\\.(\\d+))?(?:\\.(\\d+))?/;\nlet versionMatch = version.match(versionRegex);\n// versionMatch[1] = "1", versionMatch[2] = "2", versionMatch[3] = "3"'
      }
    ]
  }
];

export default regexContent; 