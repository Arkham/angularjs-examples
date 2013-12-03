var app = angular.module('basicBehaviour', []);

app.directive('enter', function () {
  return function (scope, element) {
    element.bind('mouseenter', function () {
      console.log('Mouse inside!');
    })
  };
})

app.directive('leave', function () {
  return function (scope, element) {
    element.bind('mouseleave', function () {
      console.log('Mouse outside!');
    })
  };
})
