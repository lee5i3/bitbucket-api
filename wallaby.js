/* eslint global-require: 0 import/no-extraneous-dependencies:0 */

module.exports = (wallaby) => {
  return {
    files: [
      'index.js',
      'lib/**/*.js'
    ],
    tests: [
      'tests/**/*.tests.js'
    ],
    setup: () => {
      const mocha = wallaby.testFramework;
      mocha.timeout(5000);
    },
    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'NODE_ENV=test'
      }
    },
    testFramework: 'mocha',
    workers: {
      recycle: true
    }
  };
};
