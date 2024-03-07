// Install required packages:
// npm install puppeteer markdown-it --save

const puppeteer = require('puppeteer');
const markdownIt = require('markdown-it')();

async function convertMarkdownToPDF(markdownText, outputPath) {
  try {
    // Parse Markdown to HTML
    const htmlContent = markdownIt.render(markdownText);

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set content to the HTML converted from Markdown
    await page.setContent(htmlContent);

    // Generate PDF
    await page.pdf({ path: outputPath, format: 'A4' });

    // Close the browser
    await browser.close();

    console.log(`PDF successfully generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error converting Markdown to PDF:', error);
  }
}

// Example Usage:
const markdownContent = `
# Markdown to PDF Converter

This is a simple example of a Markdown to PDF converter in JavaScript.

- It uses the \`markdown-it\` library to parse Markdown to HTML.
- It utilizes \`puppeteer\` to generate a PDF from the HTML content.

## How to use

1. Install the required packages:
   \`\`\`
   npm install puppeteer markdown-it --save
   \`\`\`

2. Use the \`convertMarkdownToPDF\` function in your code:
   \`\`\`javascript
   const converter = require('markdown-to-pdf');

   const markdownContent = '# Hello, Markdown to PDF!';
   const outputPath = 'output.pdf';

   converter.convertMarkdownToPDF(markdownContent, outputPath);
   \`\`\`
`;

const outputFilePath = 'output.pdf';

convertMarkdownToPDF(markdownContent, outputFilePath);
