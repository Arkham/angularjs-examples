var app = angular.module('app', []);

app.directive('weakPassword', function () {
  var inputEl = angular.element('<p>{{model.input}}</p>');

  return {
    restrict: 'E',
    template: '<div><input type="text" ng-model="model.input"></div>',
    compile: function (templateEl) {
      templateEl.append(inputEl);

      return function (scope, element) {
        scope.$watch("model.input", function (value) {
          if (value === "password") {
            inputEl.toggleClass("alert-box alert")
          }
        })

      }
    }
  }
})
