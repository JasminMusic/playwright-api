# Factorial Calculator Testing

This repository contains a TypeScript project designed to test the functionality of a factorial calculator. The project is structured into three main components: an API endpoint class which targets the factorial calculator of a https://qainterview.pythonanywhere.com/ , a factorial calculation function, and a suite of tests using Playwright.

## Overview

The project aims to ensure that the factorial calculator operates correctly across a range of inputs, specifically integers between 10 and 100. It includes a TypeScript class for interacting with the API, a function to calculate factorial values, and automated tests to validate the calculator's responses against expected outcomes.

### File Structure

- `ApiEndpoint.ts`: Defines the `ApiEndpoint` class for making POST requests to the `/factorial` endpoint. It validates input and sends a factorial calculation request.
- `factorialCalculator.ts`: Contains the `calculateFactorial` function that computes the factorial of a number, supporting large integers by returning results in scientific notation if necessary.
- `factorialTests.spec.ts`: Playwright test suite that includes tests for specific, random, and all integers in the range 10-100, ensuring the API and calculator function correctly.

## Getting Started

### Prerequisites

- Node.js
- TypeScript
- Playwright

Ensure you have the above prerequisites installed on your system to run the tests and interact with the API.

### Installation

1. Clone the repository:
2. npm install
3. npm run test:api
