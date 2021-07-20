const {alias, aliasJest, configPaths} = require('react-app-rewire-alias')  // eslint-disable-line

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
