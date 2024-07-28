module.exports = {
  presets: [
    "@babel/preset-env", // Transpile ES6+ to backwards compatible JavaScript
    "@babel/preset-react", // Transpile JSX to JavaScript
    "@babel/preset-typescript"
  ],
  overrides: [{
    include: ['./node_modules/some-package'],
    presets: [['@babel/preset-react', { /* specific options here */ }]]
  }],
  plugins: ["@babel/plugin-syntax-jsx"]
};
