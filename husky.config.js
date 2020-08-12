module.exports = {
  husky: {
    hooks: {
      'pre-commit': 'echo test',
      // 'pre-commit': 'npm run pretty-quick && npm run lint',
    },
  },
};
