const defaultParams = `
  --require 'test/**/*.js'
  --require 'test/steps/**/*.js'
  --exit
  test/features/**/*.feature
  `;

module.exports = {
  ci: `
  --world-parameters '{"ci": "true"}'
  ${defaultParams}
  `,
  default: `
  ${defaultParams}
  `
};
