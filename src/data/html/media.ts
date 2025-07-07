const mediaContent = [
  {
    title: 'Images and pictures',
    examples: [
      {
        title: 'Basic image with alt text',
        code: '<!-- Simple image -->\n<img src="photo.jpg" alt="A beautiful sunset over the mountains">\n\n<!-- Image with dimensions -->\n<img src="logo.png" alt="Company Logo" width="200" height="100">\n\n<!-- Responsive image -->\n<img src="hero.jpg" alt="Hero image" style="max-width: 100%; height: auto;">\n\n<!-- Image with figure and caption -->\n<figure>\n  <img src="chart.png" alt="Sales chart for Q4">\n  <figcaption>Figure 1: Quarterly sales performance</figcaption>\n</figure>'
      },
      {
        title: 'Picture element for responsive images',
        code: '<picture>\n  <!-- High resolution for large screens -->\n  <source media="(min-width: 800px)" srcset="large-image.jpg">\n  \n  <!-- Medium resolution for tablets -->\n  <source media="(min-width: 400px)" srcset="medium-image.jpg">\n  \n  <!-- Fallback for small screens -->\n  <img src="small-image.jpg" alt="Responsive image">\n</picture>'
      }
    ]
  },
  {
    title: 'Audio and video',
    examples: [
      {
        title: 'Audio player',
        code: '<!-- Basic audio player -->\n<audio controls>\n  <source src="music.mp3" type="audio/mpeg">\n  <source src="music.ogg" type="audio/ogg">\n  Your browser does not support the audio element.\n</audio>\n\n<!-- Audio with preload and loop -->\n<audio controls preload="metadata" loop>\n  <source src="background-music.mp3" type="audio/mpeg">\n</audio>'
      },
      {
        title: 'Video player',
        code: '<!-- Basic video player -->\n<video width="640" height="360" controls>\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  Your browser does not support the video element.\n</video>\n\n<!-- Video with poster and autoplay -->\n<video controls poster="thumbnail.jpg" autoplay muted>\n  <source src="presentation.mp4" type="video/mp4">\n</video>'
      }
    ]
  }
];

export default mediaContent; 