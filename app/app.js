(function() {
  angular.module("newsApp", ["ui.router"]).config(function($stateProvider) {
    var newsState = {
      name: "news",
      url: "",
      template: "<news></news>"
    };
    $stateProvider.state(newsState);
  });
})();
