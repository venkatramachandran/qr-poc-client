var app = angular.module('qr-client', ['ngResource', 'ui.router', 'cgBusy', 'ui.bootstrap']);

app.config(function($compileProvider) {   
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
});

app.filter('encodeURI', function() {
    return window.encodeURI;
});
