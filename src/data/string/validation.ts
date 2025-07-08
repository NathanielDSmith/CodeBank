const validationContent = [
  {
    title: 'Basic String Validation',
    examples: [
      {
        title: 'Checking string properties',
        code: '// Checking if string is empty\nfunction isEmpty(str) {\n  return str === "" || str.length === 0;\n}\n\nlet emptyString = "";\nlet nonEmptyString = "Hello";\nconsole.log(isEmpty(emptyString)); // true\nconsole.log(isEmpty(nonEmptyString)); // false\n\n// Checking string length\nfunction isValidLength(str, minLength, maxLength) {\n  return str.length >= minLength && str.length <= maxLength;\n}\n\nlet username = "john_doe";\nlet isValidUsername = isValidLength(username, 3, 20); // true\n\n// Checking if string contains only letters\nfunction isOnlyLetters(str) {\n  return /^[a-zA-Z]+$/.test(str);\n}\n\nlet name = "John";\nlet mixedText = "John123";\nconsole.log(isOnlyLetters(name)); // true\nconsole.log(isOnlyLetters(mixedText)); // false\n\n// Checking if string contains only numbers\nfunction isOnlyNumbers(str) {\n  return /^\\d+$/.test(str);\n}\n\nlet phoneNumber = "1234567890";\nlet mixedNumbers = "123abc";\nconsole.log(isOnlyNumbers(phoneNumber)); // true\nconsole.log(isOnlyNumbers(mixedNumbers)); // false'
      },
      {
        title: 'Email and URL validation',
        code: '// Basic email validation\nfunction isValidEmail(email) {\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(email);\n}\n\nlet validEmail = "user@example.com";\nlet invalidEmail = "user@example";\nconsole.log(isValidEmail(validEmail)); // true\nconsole.log(isValidEmail(invalidEmail)); // false\n\n// URL validation\nfunction isValidURL(url) {\n  try {\n    new URL(url);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\nlet validURL = "https://example.com";\nlet invalidURL = "not-a-url";\nconsole.log(isValidURL(validURL)); // true\nconsole.log(isValidURL(invalidURL)); // false\n\n// Phone number validation\nfunction isValidPhoneNumber(phone) {\n  const phoneRegex = /^\\+?[1-9]\\d{1,14}$/;\n  return phoneRegex.test(phone.replace(/[\\s\\-\\(\\)]/g, ""));\n}\n\nlet validPhone = "+1-555-123-4567";\nlet invalidPhone = "abc123";\nconsole.log(isValidPhoneNumber(validPhone)); // true\nconsole.log(isValidPhoneNumber(invalidPhone)); // false'
      }
    ]
  },
  {
    title: 'Advanced Validation Patterns',
    examples: [
      {
        title: 'Password strength validation',
        code: '// Password strength checker\nfunction checkPasswordStrength(password) {\n  const checks = {\n    length: password.length >= 8,\n    lowercase: /[a-z]/.test(password),\n    uppercase: /[A-Z]/.test(password),\n    numbers: /\\d/.test(password),\n    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)\n  };\n  \n  const score = Object.values(checks).filter(Boolean).length;\n  \n  if (score < 3) return "Weak";\n  if (score < 5) return "Medium";\n  return "Strong";\n}\n\nlet weakPassword = "password";\nlet mediumPassword = "Password123";\nlet strongPassword = "P@ssw0rd!";\n\nconsole.log(checkPasswordStrength(weakPassword)); // "Weak"\nconsole.log(checkPasswordStrength(mediumPassword)); // "Medium"\nconsole.log(checkPasswordStrength(strongPassword)); // "Strong"\n\n// Username validation\nfunction isValidUsername(username) {\n  const minLength = 3;\n  const maxLength = 20;\n  const validChars = /^[a-zA-Z0-9_]+$/;\n  \n  return username.length >= minLength &&\n         username.length <= maxLength &&\n         validChars.test(username) &&\n         !username.startsWith("_") &&\n         !username.endsWith("_");\n}\n\nlet validUsername = "john_doe123";\nlet invalidUsername = "_user_";\nconsole.log(isValidUsername(validUsername)); // true\nconsole.log(isValidUsername(invalidUsername)); // false'
      },
      {
        title: 'Credit card and date validation',
        code: '// Credit card validation (Luhn algorithm)\nfunction isValidCreditCard(cardNumber) {\n  const cleanNumber = cardNumber.replace(/\\s/g, "");\n  \n  if (!/^\\d{13,19}$/.test(cleanNumber)) return false;\n  \n  let sum = 0;\n  let isEven = false;\n  \n  for (let i = cleanNumber.length - 1; i >= 0; i--) {\n    let digit = parseInt(cleanNumber[i]);\n    \n    if (isEven) {\n      digit *= 2;\n      if (digit > 9) digit -= 9;\n    }\n    \n    sum += digit;\n    isEven = !isEven;\n  }\n  \n  return sum % 10 === 0;\n}\n\nlet validCard = "4532015112830366";\nlet invalidCard = "4532015112830367";\nconsole.log(isValidCreditCard(validCard)); // true\nconsole.log(isValidCreditCard(invalidCard)); // false\n\n// Date validation\nfunction isValidDate(dateString) {\n  const date = new Date(dateString);\n  return date instanceof Date && !isNaN(date);\n}\n\nlet validDate = "2024-01-15";\nlet invalidDate = "2024-13-45";\nconsole.log(isValidDate(validDate)); // true\nconsole.log(isValidDate(invalidDate)); // false'
      }
    ]
  }
];

export default validationContent; 