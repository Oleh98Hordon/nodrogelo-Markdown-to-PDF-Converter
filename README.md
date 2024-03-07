# markdown-to-pdf

[![npm version](https://badge.fury.io/js/markdown-to-pdf.svg)](https://www.npmjs.com/package/markdown-to-pdf)

A simple Markdown to PDF converter package in JavaScript using puppeteer and markdown-it.

## Installation

Install the required packages using npm:

```bash
npm install puppeteer markdown-it --save
```

## USAGE

```
const converter = require('markdown-to-pdf');

const markdownContent = '# Hello, Markdown to PDF!';
const outputPath = 'output.pdf';

converter.convertMarkdownToPDF(markdownContent, outputPath);
```

The convertMarkdownToPDF function takes the Markdown content and an output path as parameters, generating a PDF file at the specified location.

## How it Works

Markdown Parsing: The package uses the markdown-it library to parse Markdown content into HTML.

PDF Generation: It utilizes puppeteer to launch a headless browser, set the HTML content, and generate a PDF file.