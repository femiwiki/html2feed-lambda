'use strict';
let ApiBuilder = require('claudia-api-builder');
let api = new ApiBuilder();
let child = require('child_process');
let path = require('path');

api.get(
  'html2feed',
  req => {
    let url = 'http://womenlink.or.kr/notices';
    let processArgs = [
      path.join(__dirname, 'phantom-script.js'),
      url
    ];
    return child.spawnSync("./phantomjs_linux-x86_64", processArgs, {}).stdout.toString();
  },
  {success: {contentType: 'text/html'}}
);

module.exports = api;
