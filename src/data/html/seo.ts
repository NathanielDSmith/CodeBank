const seoContent = [
  {
    title: 'SEO-friendly HTML structure',
    examples: [
      {
        title: 'Proper heading hierarchy',
        code: '<!-- Good SEO structure -->\n<h1>Main Page Title (only one per page)</h1>\n\n<section>\n  <h2>Primary Section</h2>\n  <p>Content about the primary topic...</p>\n  \n  <article>\n    <h3>Sub-topic</h3>\n    <p>Detailed content about sub-topic...</p>\n    \n    <h4>Specific Detail</h4>\n    <p>Very specific information...</p>\n  </article>\n</section>\n\n<section>\n  <h2>Secondary Section</h2>\n  <p>Related but secondary content...</p>\n</section>'
      },
      {
        title: 'Meta tags for SEO',
        code: '<head>\n  <!-- Essential SEO meta tags -->\n  <title>Your Page Title - Brand Name</title>\n  <meta name="description" content="A compelling 150-160 character description of your page content that encourages clicks from search results.">\n  \n  <!-- Open Graph for social sharing -->\n  <meta property="og:title" content="Your Page Title">\n  <meta property="og:description" content="Description for social media sharing">\n  <meta property="og:image" content="https://yoursite.com/image.jpg">\n  <meta property="og:url" content="https://yoursite.com/page-url">\n  \n  <!-- Canonical URL to prevent duplicate content -->\n  <link rel="canonical" href="https://yoursite.com/page-url">\n</head>'
      }
    ]
  },
  {
    title: 'Content optimization',
    examples: [
      {
        title: 'Structured data with JSON-LD',
        code: '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "How to Write Better HTML",\n  "author": {\n    "@type": "Person",\n    "name": "John Doe"\n  },\n  "datePublished": "2024-01-15",\n  "description": "Learn the best practices for writing semantic HTML",\n  "image": "https://example.com/article-image.jpg"\n}\n</script>'
      },
      {
        title: 'Image optimization for SEO',
        code: '<!-- Optimized image with alt text -->\n<img src="product-photo.jpg" \n     alt="Red leather wallet with credit card slots" \n     title="Premium leather wallet" \n     width="400" \n     height="300">\n\n<!-- Responsive images with srcset -->\n<img src="hero-small.jpg" \n     srcset="hero-small.jpg 300w, \n             hero-medium.jpg 600w, \n             hero-large.jpg 900w" \n     sizes="(max-width: 600px) 300px, \n            (max-width: 900px) 600px, \n            900px" \n     alt="Hero image for homepage">\n\n<!-- Lazy loading for better performance -->\n<img src="lazy-image.jpg" \n     alt="Content image" \n     loading="lazy">'
      }
    ]
  }
];

export default seoContent; 