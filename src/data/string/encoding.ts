const encodingContent = [
  {
    title: 'URL Encoding and Decoding',
    examples: [
      {
        title: 'Basic URL encoding',
        code: '// URL encoding\nlet text = "Hello World!";\nlet encoded = encodeURIComponent(text); // "Hello%20World!"\nlet decoded = decodeURIComponent(encoded); // "Hello World!"\n\n// Encoding special characters\nlet url = "https://example.com/path?name=John Doe&age=25";\nlet encodedUrl = encodeURI(url);\n// "https://example.com/path?name=John%20Doe&age=25"\n\n// Decoding URL parameters\nlet queryString = "name=John%20Doe&age=25&city=New%20York";\nlet decodedQuery = decodeURIComponent(queryString);\n// "name=John Doe&age=25&city=New York"\n\n// Parsing query parameters\nfunction parseQueryString(queryString) {\n  const params = {};\n  const pairs = queryString.split("&");\n  \n  for (let pair of pairs) {\n    const [key, value] = pair.split("=");\n    params[decodeURIComponent(key)] = decodeURIComponent(value || "");\n  }\n  \n  return params;\n}\n\nlet query = "name=John%20Doe&age=25";\nlet parsed = parseQueryString(query);\n// { name: "John Doe", age: "25" }'
      },
      {
        title: 'Base64 encoding and decoding',
        code: '// Base64 encoding (browser environment)\nlet text = "Hello World!";\nlet base64Encoded = btoa(text); // "SGVsbG8gV29ybGQh"\nlet base64Decoded = atob(base64Encoded); // "Hello World!"\n\n// Encoding with Unicode support\nfunction encodeUnicode(str) {\n  return btoa(unescape(encodeURIComponent(str)));\n}\n\nfunction decodeUnicode(str) {\n  return decodeURIComponent(escape(atob(str)));\n}\n\nlet unicodeText = "Hello 世界!";\nlet encoded = encodeUnicode(unicodeText);\nlet decoded = decodeUnicode(encoded);\n\n// Encoding binary data\nlet binaryString = "Hello World!";\nlet binaryEncoded = btoa(binaryString);\n// Convert back to binary\nlet binaryDecoded = atob(binaryEncoded);'
      }
    ]
  },
  {
    title: 'HTML and Text Encoding',
    examples: [
      {
        title: 'HTML entity encoding',
        code: '// HTML entity encoding\nfunction encodeHtmlEntities(text) {\n  const entities = {\n    "&": "&amp;",\n    "<": "&lt;",\n    ">": "&gt;",\n    "\"": "&quot;",\n    "\'": "&#39;"\n  };\n  \n  return text.replace(/[&<>"\']/g, char => entities[char]);\n}\n\nlet htmlText = "<script>alert(\'Hello\')</script>";\nlet encodedHtml = encodeHtmlEntities(htmlText);\n// "&lt;script&gt;alert(&#39;Hello&#39;)&lt;/script&gt;"\n\n// Decoding HTML entities\nfunction decodeHtmlEntities(text) {\n  const entities = {\n    "&amp;": "&",\n    "&lt;": "<",\n    "&gt;": ">",\n    "&quot;": "\"",\n    "&#39;": "\'"\n  };\n  \n  return text.replace(/&(amp|lt|gt|quot|#39);/g, entity => entities[entity]);\n}\n\nlet decodedHtml = decodeHtmlEntities(encodedHtml);\n// "<script>alert(\'Hello\')</script>"\n\n// Escaping special characters\nfunction escapeRegex(text) {\n  return text.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&");\n}\n\nlet regexText = "Hello.world*";\nlet escaped = escapeRegex(regexText); // "Hello\\.world\\*"'
      }
    ]
  }
];

export default encodingContent; 