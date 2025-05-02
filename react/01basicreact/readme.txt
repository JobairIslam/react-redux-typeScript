{
  "name": "01basicreact", // Project name
  "version": "0.1.0", // Project version
  "private": true, // Prevents accidental publishing to npm
  "dependencies": { // List of runtime dependencies
    "@testing-library/dom": "^10.4.0", // DOM testing utilities
    "@testing-library/jest-dom": "^6.6.3", // Custom Jest matchers for DOM nodes
    "@testing-library/react": "^16.3.0", // React testing utilities
    "@testing-library/user-event": "^13.5.0", // Simulate user events in tests
    "react": "^19.1.0", // React core library
    "react-dom": "^19.1.0", // React DOM rendering
    "react-scripts": "5.0.1", // Scripts and configuration for Create React App
    "web-vitals": "^2.1.4" // Measure web performance metrics
  },
  "scripts": { // Custom npm scripts
    "start": "react-scripts start", // Start development server
    "build": "react-scripts build", // Build app for production
    "test": "react-scripts test", // Run tests
    "eject": "react-scripts eject" // Eject configuration (irreversible)
  },
  "eslintConfig": { // ESLint configuration
    "extends": [
      "react-app", // Use Create React App ESLint rules
      "react-app/jest" // Use Jest-specific ESLint rules
    ]
  },
  "browserslist": { // Target browsers for build
    "production": [ // Browsers for production build
      ">0.2%", // Browsers with more than 0.2% market share
      "not dead", // Exclude browsers that are no longer maintained
      "not op_mini all" // Exclude Opera Mini
    ],
    "development": [ // Browsers for development
      "last 1 chrome version", // Latest Chrome
      "last 1 firefox version", // Latest Firefox
      "last 1 safari version" // Latest Safari
    ]
  }
}