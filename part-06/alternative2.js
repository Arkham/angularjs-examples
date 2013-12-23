var app = angular.module('phoneApp', []);

controllers = {};
controllers.AppCtrl = function($scope) {
  this.sayHi = function () {
    alert("hi");
  }

  return $scope.AppCtrl = this;
}

directives = {};
directives.panel = function() {
  return {
    restrict: "E",
    link: function (scope, element) {
      element.addClass('panel');
    }
  }
}

app.controller(controllers);
app.directive(directives);
