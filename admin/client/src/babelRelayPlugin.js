// See https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6#.k3r39krft
var babelRelayPlugin = require('babel-relay-plugin');
const fs = require('fs');

const schema = fs.readFileSync('./admin/client/src/schema.json');
module.exports = babelRelayPlugin(JSON.parse(schema), {
  abortOnError: true,
});
