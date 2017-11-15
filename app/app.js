(function() {
  var module = angular.module("newsApp", ["ui.router"]);

  module.config(function($stateProvider) {
    var newsState = {
      name: "news",
      url: "",
      template: "<news></news>"
    };
    $stateProvider.state(newsState);
  });
})();
