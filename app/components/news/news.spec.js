describe("news app", function() {
  beforeEach(module("newsApp"));

  var controller;
  var scope;
  beforeEach(
    inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController("news", { $scope: scope });
    })
  );

  it("should be defined", function() {
    expect(controller).toBeDefined();
    expect(controller.title).toBeDefined();
    expect(controller.title).toBe("News sources");
  });
});
