var React = require('react');
var ReactDOM = require('react-dom');
var Raven = require('raven-js');
var routes = require('./config/routes');

var sentryKey = '94e92e97f6a346b79bee2a7c8da60bb8';
var sentryApp = '112288';
var sentryUrl = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryUrl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
