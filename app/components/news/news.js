(function() {
  var module = angular.module("newsApp");

  module.component("news", {
    templateUrl: "/components/news/news.html",
    controller: function() {
      this.title = "News sources";
    }
  });
})();
