import React from "react"

module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest" // Transform TypeScript and JavaScript files using babel-jest
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect" // Setup files for @testing-library/jest-dom
  ],
  testEnvironment: "jsdom", // Set the testing environment to jsdom
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // File extensions to handle
};
